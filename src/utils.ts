import {
  isMultiLineCodeBody,
  isMultiLineCodeStart,
  isElement,
  isEvalCode,
  isExecuteCode,
  isFilterOrProperty
} from './regex';
import { State } from './state';

export function newline(add: boolean) {
  return add ? '\n' : '';
}

export function getLineOffset(distance: number, indentation: number, tabSize: number) {
  if (distance === 0) {
    return 0;
  }

  const a = tabSize * Math.round(distance / tabSize - 0.1);
  if (a > indentation + tabSize) {
    return indentation - distance + tabSize;
  }
  return a - distance;
}

/** Returns the distance between the beginning and the first char. */
export function getDistance(text: string, tabSize: number): number {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char !== ' ' && char !== '\t') {
      break;
    }
    if (char === '\t') {
      count += tabSize;
    } else {
      count++;
    }
  }
  return count;
}

/** Replaces tabs with spaces or vice versa if insertSpaces is false.*/
export function replaceSpacesOrTabs(text: string, tabSize: number, insertSpaces: boolean) {
  if (insertSpaces) {
    return text.replace(/\t/g, ' '.repeat(tabSize));
  } else {
    return text.replace(new RegExp(' '.repeat(tabSize), 'g'), '\t');
  }
}

/** returns the string with the correct indentation (the tabs will be converted to spaces) */
export function replaceWithOffset(text: string, offset: number, tabSize: number) {
  if (offset < 0) {
    text = text
      .replace(/\t/g, ' '.repeat(tabSize))
      .replace(new RegExp(`^ {${Math.abs(offset)}}`), '');
  } else {
    text = text.replace(/^/, ' '.repeat(offset));
  }
  return text;
}

export function getIsMultiLineCode(isMultilineCode: boolean, line: string): boolean {
  return isMultilineCode ? isMultiLineCodeBody(line) : isMultiLineCodeStart(line);
}

export function getOffset(
  STATE: State,
  OPTIONS: { tabSize: number; insertSpaces: boolean } | { tabSize: number; insertSpaces: boolean },
  distance: number
) {
  if (STATE.isMultilineCode) {
    return STATE.indentation + OPTIONS.tabSize - distance;
  }
  return getLineOffset(distance, STATE.indentation, OPTIONS.tabSize);
}

export function canSetIndentation(STATE: State, line: string) {
  return (
    !STATE.isMultilineCode &&
    (isElement(line) || isEvalCode(line) || isExecuteCode(line) || isFilterOrProperty(line))
  );
}
