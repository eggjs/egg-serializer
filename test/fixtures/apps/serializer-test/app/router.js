'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/search', controller.home.search);
  router.get('/user', controller.home.user);
  router.get('/users', controller.home.users);
  router.get('/empty', controller.home.empty);
};
