/*
 * @Author: tiny.jiao@aliyun.com
 * @Date: 2019-10-24 22:19:47
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-30 16:27:00
 */
'use strict';

// 框架统一入口
// 通常用来在应用自动期间进行一些初始化工作

exports.modules = app => {
  app.beforeStart(async () => {
    const mysqlConfig = await app.configCenter.fetch('mysql');
    app.datebase = app.mysql.createInstance(mysqlConfig);
  });
  
  if (app.config.env === 'loacal' || app.config.env === 'unittest') {
  	app.beforeStart(async () => {
  		await app.model.async({ force: true });
  	});
  }
};
