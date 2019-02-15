'use strict';

module.exports = app => {
  return class extends app.Serializer {
    constructor() {
      super();
      this.fields = [
        'title',
        'price',
      ];
    }
  };
};
