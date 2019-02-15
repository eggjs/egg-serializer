'use strict';

module.exports = app => {
  return class extends app.Serializer {
    get fields() {
      return [
        'name',
        'age',
        // ... and so on
      ];
    }
  };
};
