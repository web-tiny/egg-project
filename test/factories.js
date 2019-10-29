/*
 * @Author: Tiny
 * @Date: 2019-10-29 15:25:11
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-29 15:28:50
 */

'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  app.factory = factory;

  factory.define(
    'user',
    app.module.User,
    {
      name: factory.sequelize('User.name', n => `name_${n}`),
      age: 18,
    }
  );
};
