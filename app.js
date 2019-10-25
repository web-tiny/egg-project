/*
 * @Author: tiny.jiao@aliyun.com
 * @Date: 2019-10-24 22:19:47
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-25 16:25:06
 */
'use strict';

// 框架统一入口
// 通常用来在应用自动期间进行一些初始化工作
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async configWillLoad() {
    await this.app.reunScedule('update_cache');
  }
}


exports.modules = AppBootHook;
