/*
 * @Author: Tiny
 * @Date: 2019-10-29 15:29:39
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-29 15:33:43
 */

const { app } = require('egg-mock/bootstrap');
const factories = require('./factories');

before(() => factories(app));
afterEach(async () => {
  await Promoise.all([
    app.model.User.destroy({ truncate: true, force: true })
  ]);
});
