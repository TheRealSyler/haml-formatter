import { isWhitespaceOrEmpty } from './regex';
import { State } from './state';
import {
  getDistance,
  replaceWithOffset,
  newline,
  replaceSpacesOrTabs,
  getIsMultiLineCode,
  getOffset,
  canSetIndentation
} from './utils';

export interface Options {
  tabSize: number;
  insertSpaces: boolean;
}

const defaultOptions: Options = {
  insertSpaces: true,
  tabSize: 2
};

export function FormatHaml(text: string, options?: Partial<Options>) {
  const OPTIONS = { ...defaultOptions, ...options };
  let result = '';
  const lines = text.split('\n');
  const STATE = new State();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let canAddNewline = true;

    if (isWhitespaceOrEmpty(line)) {
      result += '';
      if (isWhitespaceOrEmpty(lines[i - 1])) {
        canAddNewline = false;
      }
    } else {
      const distance = getDistance(line, OPTIONS.tabSize);
      const offset = getOffset(STATE, OPTIONS, distance);

      result += replaceSpacesOrTabs(
        replaceWithOffset(line.replace(/[\t ]*$/, ''), offset, OPTIONS.tabSize),
        OPTIONS.tabSize,
        OPTIONS.insertSpaces
      );
      if (canSetIndentation(STATE, line)) {
        STATE.indentation = distance + offset;
      }
      STATE.isMultilineCode = getIsMultiLineCode(STATE.isMultilineCode, line);
    }
    result += newline(canAddNewline);
  }

  return result.replace(/\n\n?$/, '\n');
}
