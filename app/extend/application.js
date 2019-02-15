'use strict';

const Serializer = require('../../lib/serializer');

const SERIALIZE_ONE = Symbol('Application#serializeOne');

module.exports = {
  get Serializer() {
    return Serializer;
  },

  /**
   * topics = app.serialize('topic', topics);
   * topic = app.serialize('api.topic', topic);
   *
   * @param {String} type Serializer name, e.g. api.user
   * @param {Object|Array<Object>} items data object or objects
   * @param {Object} [options] optional params, default is `{}`
   * @return {Object} data
   */
  serialize(type, items, options = {}) {
    if (!Array.isArray(items)) {
      return this[SERIALIZE_ONE](type, items, options);
    }

    return items.reduce((arrs, item) => {
      const data = this[SERIALIZE_ONE](type, item, options);
      if (data) arrs.push(data);
      return arrs;
    }, []);
  },

  [SERIALIZE_ONE](type, item, options) {
    if (!item) return null;
    const data = this.serializer[type].format(item, options);
    if (!data) return null;
    if (this.config.serializer.showSerializerType) data._serializer = type;
    return data;
  },
};
