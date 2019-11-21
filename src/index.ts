// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import { DangerDSLType } from '../node_modules/danger/distribution/dsl/DangerDSL';
declare var danger: DangerDSLType;
export declare function message(message: string): void;
export declare function warn(message: string): void;
export declare function fail(message: string): void;
export declare function markdown(message: string): void;

import * as fs from 'fs';
import * as glob from 'glob';

function generateMdTable(headers: string[], body: string[][]): string {
  const tableHeaders = headers.join(' | ');
  const headerSeparator = headers.map(() => ' --- ').join(' | ');
  const tableBody = body.map(r => r.join(' | ')).join('\n');
  return `${tableHeaders}\n${headerSeparator.trim()}\n${tableBody}`;
}

export default function artifactSize(globPattern) {
  if (!globPattern) {
    fail(
      'You must supply a [glob](https://github.com/isaacs/node-glob) pattern to `danger-plugin-artifact-size` or it will not know what to look for!\nSee the [README](https://www.npmjs.com/package/danger-plugin-artifact-size) for help'
    );
    return;
  }
  const everything = glob.sync(globPattern, { mark: true });
  const filePaths = everything.filter(path => !path.endsWith('/'));

  const sizes = filePaths.map(filePath => [
    filePath,
    `${(fs.statSync(filePath).size / 1000.0).toFixed(2).toString()} KB`
  ]);

  const mdSizeTable = generateMdTable(['Artifact', 'Size'], sizes);
  markdown(`**Artifacts**\n\n${mdSizeTable}`);
}
