'use strict';

module.exports = {
  /**
   * Alias to `app.serialize(...args)`
   * and auto set ctx to options.ctx
   * @return {Object} data
   */
  serialize(...args) {
    const options = args[2] || {};
    options.ctx = this;
    args[2] = options;
    return this.app.serialize(...args);
  },
};
