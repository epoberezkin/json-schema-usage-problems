const util = require('./util');
const traverse = require('json-schema-traverse');

const folders = util.getFolders();
const keywordStats = {};
const stats = {
  booleanSchema: 0,
  patternPropsAndProps: 0,
  additionalPropertiesSchema: 0
}

for (const folder of folders) {
  const {schema} = util.getFiles(folder);
  traverse(schema, {cb(sch) {
    if (typeof schema === 'boolean') {
      stats.booleanSchema++;
      return;
    }

    for (const keyword in sch) {
      if (!Object.prototype.hasOwnProperty.call(keywordStats, keyword)) {
        keywordStats[keyword] = 1;
      } else {
        keywordStats[keyword]++;
      }
    }

    if (sch.properties && sch.patternProperties) {
      stats.patternPropsAndProps++;
    }

    if (typeof sch.additionalProperties === 'object') {
      stats.additionalPropertiesSchema++;
    }
  }});
}

console.log(stats);
console.log(keywordStats);
