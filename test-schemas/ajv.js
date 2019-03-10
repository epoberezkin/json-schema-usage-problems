const Ajv = require('ajv');
ajv = new Ajv({
  schemaId: 'auto',
  addUsedSchema: false,
  unknownFormats: 'ignore',
});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

module.exports = ajv;
