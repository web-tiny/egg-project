/*
 * @Author: tiny.jiao@aliyun.com
 * @Date: 2019-10-24 22:08:42
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-25 11:23:15
 */
'use strict';

const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  static get schedule() {
    return {
      // 定时方式有两种：interval/cron
      // 定时任务执行时时间
      interval: '100m',

      // 定时任务的类型：worker/all
      type: 'worker',
    };
  }

  async subscribe() {
    const res = await this.ctx.curl('https://www.baidu.com/', {
      dataType: 'json',
    });
    this.ctx.app.cache = res.data;
  }
}

module.exports = UpdateCache;
