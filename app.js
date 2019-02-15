'use strict';

const path = require('path');
const fs = require('mz/fs');

module.exports = class {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    const { app } = this;
    app.serializer = {};
    const serializerDir = path.join(app.baseDir, 'app/serializer');
    const items = await readSerializers(serializerDir);
    for (const item of items) {
      const mod = require(item.fullpath);
      let serializer;
      if (Array.isArray(mod)) {
        // module.exports = [ ... ];
        const fields = mod;
        serializer = new app.Serializer();
        serializer.fields = fields;
      } else {
        const Serializer = mod(app);
        serializer = new Serializer();
      }
      app.serializer[item.type] = serializer;
      app.coreLogger.info('[egg-serializer] add %j serializer from %j', item.type, item.fullpath);
    }
  }
};

async function readSerializers(dir, prefix = '') {
  const items = [];
  const names = await fs.readdir(dir);
  for (const name of names) {
    const fullpath = path.join(dir, name);
    const stat = await fs.stat(fullpath);
    if (stat.isDirectory()) {
      const subItems = await readSerializers(fullpath, `${name}.`);
      for (const item of subItems) items.push(item);
    } else {
      items.push({
        type: `${prefix}${name.replace(/\.js$/, '')}`,
        fullpath,
      });
    }
  }
  return items;
}
