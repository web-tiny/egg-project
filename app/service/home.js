/*
 * @Author: Tiny
 * @Date: 2019-10-25 15:35:04
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-31 18:58:52
 */

'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    const user = await this.ctx.model.User.findAll();
    return { user };
  }
}

module.exports = HomeService;
