const assert = require('assert');
const path = require('path');
const ajv = require('./ajv');
const util = require('./util');


describe('schema and examples', () => {
  const folders = util.getFolders();

  for (const folder of folders) {
    const schema = util.getSchema(folder);
    const example = util.getExample(folder);
    const title = schema.title || schema.$id || schema.id || '';

    it(`${path.basename(folder)}: ${title}`, () => {
      assert.strictEqual(ajv.validateSchema(schema), true);
      if (example) {
        assert.strictEqual(ajv.validate(schema, example), true);
      }
    });
  }
});
