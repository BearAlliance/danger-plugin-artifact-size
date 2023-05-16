import artifactSize from './index';

declare const global: any;

describe('artifact-size-plugin', () => {
  beforeEach(() => {
    global.warn = jest.fn();
    global.message = jest.fn();
    global.fail = jest.fn();
    global.markdown = jest.fn();
  });

  afterEach(() => {
    global.warn = undefined;
    global.message = undefined;
    global.fail = undefined;
    global.markdown = undefined;
  });

  it('should print the artifact size of a single file', () => {
    artifactSize('src/test-files/travis.yml');
    expect(global.markdown).toHaveBeenCalledWith(
      `**Artifacts**

Artifact | Size
---  |  ---
src/test-files/travis.yml | 0.28 KB`
    );
  });

  it('should print the artifact size of a multiple files', () => {
    artifactSize('src/test-files/*.yml');
    expect(global.markdown).toHaveBeenCalledWith(
      `**Artifacts**

Artifact | Size
---  |  ---
src/test-files/travis.yml | 0.28 KB
src/test-files/prettierrc.yml | 0.04 KB`
    );
  });

  it('should print the artifact size of files in a directory', () => {
    artifactSize('src/test-files/**');
    expect(global.markdown).toHaveBeenCalledWith(
      `**Artifacts**

Artifact | Size
---  |  ---
src/test-files/travis.yml | 0.28 KB
src/test-files/prettierrc.yml | 0.04 KB
src/test-files/commitlintrc.json | 0.05 KB`
    );
  });
});
