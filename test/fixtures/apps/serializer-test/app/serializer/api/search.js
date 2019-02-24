'use strict';

module.exports = app => {
  return class extends app.Serializer {
    constructor() {
      super();
      this.fields = [
        'count',
        'time',
        // ... and so on
      ];
    }

    format(obj, options) {
      if (options.null) return null;

      const data = this.pick(obj);

      data.book = app.serialize('api.book', obj.book);
      data.user = app.serialize('api.user', obj.user);
      data.last_editor = app.serialize('api.user', obj.last_editor);
      data.server_time = 1550216827100;
      if (options.foo === 'bar') {
        data.foo = 'bar';
      }
      if (options.ctx) {
        data.method = options.ctx.method;
      }

      return data;
    }
  };
};
