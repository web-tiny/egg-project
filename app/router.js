'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.resources('users', '/users', controller.user);
  router.get('/search', controller.search.index);
  router.post('/form', controller.form.post);
  router.resources('/topics', '/api/v2/topics', controller.topics);
};
