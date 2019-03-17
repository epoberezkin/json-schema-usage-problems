const glob = require('glob');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');
const ajv = require('./ajv');


module.exports = {
  getFolders() {
    return glob.sync('./real-schemas/{.,}*/', {});
  },

  getFiles(folder) {
    return {
      schema: getData(folder, 'schema'),
      example: getData(folder, 'example'),
      info: getData(folder, '_info')
    }
  },

  getTitle(schema, info) {
    return (info && info.title) || schema.title ||
           (info && info.$id) || schema.$id || schema.id || '';
  },

  validateInfo: ajv.compile({
    type: 'object',
    propertyNames: {enum: ['$id', 'title', 'language', 'validator']},
    additionalProperties: {type: 'string'}
  }),
};


function getData(folder, name) {
  files = glob.sync(`${folder}/${name}.*`, {});
  if (files.length > 1) throw new Error(`only one ${name}.* file is expected in folder ${folder}`);
  if (files.length == 0) return;
  const file = files[0];
  const ext = path.extname(file);
  switch (ext) {
    case '.json':
    case '.js':
      return require(path.join(__dirname, '..', file));
    case '.yaml':
    case '.yml':
      return yaml.safeLoad(fs.readFileSync(file, 'utf8'));  
    default:
      throw new Error(`${name} should be JSON, YAML or JavaScript file: ${file}`);
  }
}
