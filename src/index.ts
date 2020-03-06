import { isWhitespaceOrEmpty } from './regex';
import { State } from './state';
import {
  getDistance,
  getLineOffset,
  replaceWithOffset,
  newline,
  replaceSpacesOrTabs
} from './utils';

export interface Options {
  tabSize: number;
  insertSpaces: boolean;
}

const defaultOptions: Options = {
  insertSpaces: true,
  tabSize: 2
};

export function FormatHaml(text: string, options: Partial<Options>) {
  const OPTIONS = { ...defaultOptions, ...options };
  let result = '';
  const lines = text.split('\n');
  const STATE = new State();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let addNewline = true;

    if (isWhitespaceOrEmpty(line)) {
      result += '';
      if (isWhitespaceOrEmpty(lines[i - 1])) {
        addNewline = false;
      }
    } else {
      const distance = getDistance(line, OPTIONS.tabSize);
      const offset = getLineOffset(distance, STATE.indentation, OPTIONS.tabSize);

      result += replaceSpacesOrTabs(
        replaceWithOffset(line.replace(/[\t ]*$/, ''), offset, OPTIONS.tabSize),
        OPTIONS.tabSize,
        OPTIONS.insertSpaces
      );
      STATE.indentation = distance + offset;
    }
    result += newline(addNewline);
  }

  return result.replace(/\n\n?$/, '\n');
}
