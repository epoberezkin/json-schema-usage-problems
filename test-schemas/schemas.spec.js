const assert = require('assert');
const path = require('path');
const ajv = require('./ajv');
const util = require('./util');


describe('schemas and examples', () => {
  const folders = util.getFolders();

  for (const folder of folders) {
    const {schema, example, info} = util.getFiles(folder);
    const title = util.getTitle(schema, info);

    describe(`${path.basename(folder)}: ${title}`, () => {
      it('schema', () => {
        assert.strictEqual(ajv.validateSchema(schema), true);
      });

      if (example) {
        it('example', () => {
          assert.strictEqual(ajv.validate(schema, example), true);
        });
      }

      if (info) {
        it ('info', () => {
          assert.strictEqual(util.validateInfo(info), true);
        });
      }
    });
  }
});
