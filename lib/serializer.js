'use strict';

class Serializer {
  pick(obj, fields) {
    fields = fields || this.fields || [];
    const data = {};
    for (const field of fields) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, field);
      if (descriptor && ('value' in descriptor || typeof descriptor.get === 'function')) {
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
