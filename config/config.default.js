/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571816571305_1935';

  // add your middleware config here
  config.middleware = [ 'gzip' ];

  config.gzip = {
    threshold: 1024,
  };

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.mysql = {
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123',
        datebase: 'tiny_database',
      },
      app: true,
      agent: false,
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123',
    database: 'egg-sequelize-doc-default',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    middleware: [ 'errorHandler' ],
    errorHandler: {
      match: '/api',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
