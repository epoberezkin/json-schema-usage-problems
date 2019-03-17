const util = require('./util');
const traverse = require('json-schema-traverse');
const path = require('path');
traverse.skipKeywords.discriminator = true;

const folders = util.getFolders();
const stats = [];
const USAGE = {
  boolSchema: 'boolean schema',
  patternPropsAndProps: 'patternProperties and properties',
  additionalPropsSchema: 'additionalProperties is schema',
  itemsArray: 'items is array of schemas'
};

setUsageStats();

for (const folder of folders) {
  const folderName = path.basename(folder);
  if (folderName.indexOf('.template') === 0) continue;
  const {schema} = util.getFiles(folder);
  traverse(schema, {allKeys: true, cb(sch) {
    if (typeof schema === 'boolean') {
      incrementFreq('usage', USAGE.boolSchema);
      return;
    }

    for (const keyword in sch) {
      incrementFreq('keyword', keyword);
    }

    if (sch.properties && sch.patternProperties) {
      incrementFreq('usage', USAGE.patternPropsAndProps);
    }

    if (typeof sch.additionalProperties === 'object') {
      incrementFreq('usage', USAGE.additionalPropsSchema);
    }

    if (Array.isArray(sch.items)) {
      incrementFreq('usage', USAGE.itemsArray);
    }
  }});

  incrementUsage(folderName);
}

prepStats();

console.log(stats);


function setUsageStats() {
  for (const name in USAGE) {
    const stat = getStat('usage', USAGE[name]);
    stat.counts.usage = 0;
  }
}

function incrementFreq(group, name) {
  const stat = getStat(group, name);
  stat.counts.freq++;
  stat.counts.schema++;
}

function getStat(group, name) {
  let stat = stats.find(s => s.group === group && s.name === name);
  if (!stat) {
    stat = {group, name, sources: [], counts: {usage: 0, freq: 0, schema: 0}};
    stats.push(stat);
  }
  return stat;
}

function incrementUsage(source) {
  for (const stat of stats) {
    if (stat.counts.schema) {
      stat.counts.schema = 0;
      stat.counts.usage++;
      stat.sources.push(source);
    }
  }
}

function prepStats() {
  for (const stat of stats) {
    delete stat.counts.schema;
  }

  stats.sort((s1, s2) => {
    if (s1.group > s2.group) return 1;
    if (s1.group < s2.group) return -1;
    return (s2.counts.usage - s1.counts.usage) || (s2.counts.freq - s1.counts.freq)
  });
}
