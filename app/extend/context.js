'use strict';

module.exports = {
  /**
   * Alias to `app.serialize(...args)`
   * @return {Object} data
   */
  serialize(...args) {
    return this.app.serialize(...args);
  },
};
