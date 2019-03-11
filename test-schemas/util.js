const glob = require('glob');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');


module.exports = {
  getFolders() {
    return glob.sync('./real-schemas/{.,}*', {})
            .filter(f => path.basename(f) !== 'README.md');
  },

  getSchema(folder) {
    return getData(folder, 'schema');
  },

  getExample(folder) {
    return getData(folder, 'example');
  },
};


function getData(folder, name) {
  files = glob.sync(`${folder}/${name}.*`, {});
  if (files.length !== 1) throw new Error(`only one ${name}.* file is expected in folder ${folder}`);
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
