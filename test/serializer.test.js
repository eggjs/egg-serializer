'use strict';

const mock = require('egg-mock');

describe('test/serializer.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/serializer-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, serializer')
      .expect(200);
  });
});
