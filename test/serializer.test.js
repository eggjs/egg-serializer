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

  it('should GET /user', () => {
    return app.httpRequest()
      .get('/user')
      .expect({
        name: 'fengmk2',
        age: 30,
      })
      .expect(200);
  });

  it('should GET /user with showSerializerType = true', () => {
    mock(app.config.serializer, 'showSerializerType', true);
    return app.httpRequest()
      .get('/user')
      .expect({
        name: 'fengmk2',
        age: 30,
        _serializer: 'user',
      })
      .expect(200);
  });

  it('should GET /empty with showSerializerType = true', () => {
    mock(app.config.serializer, 'showSerializerType', true);
    return app.httpRequest()
      .get('/empty')
      .expect({
        _serializer: 'empty',
      })
      .expect(200);
  });

  it('should GET /users', () => {
    return app.httpRequest()
      .get('/users')
      .expect([
        {
          name: 'fengmk2',
          age: 30,
        },
        {
          name: 'fengmk3',
          age: 3,
        },
        {
          age: 50,
        },
      ])
      .expect(200);
  });

  it('should GET /search', () => {
    return app.httpRequest()
      .get('/search')
      .expect({
        count: 1000,
        time: 10,
        book: { title: 'nodejs deep', price: 100 },
        user: { name: 'ok', age: 18 },
        last_editor: { name: 'mike' },
        server_time: 1550216827100,
        method: 'GET',
      })
      .expect(200);
  });

  it('should GET /search?null=1', () => {
    return app.httpRequest()
      .get('/search?null=1')
      .expect({})
      .expect(204);
  });
});
