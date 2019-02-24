'use strict';

class Serializer {
  pick(obj, fields) {
    fields = fields || this.fields || [];
    const data = {};
    for (const field of fields) {
      if (field in obj) {
        data[field] = obj[field];
      }
    }
    return data;
  }

  // format(obj, options)
  format(obj) {
    return this.pick(obj);
  }
}

module.exports = Serializer;
