/*
 * @Author: Tiny
 * @Date: 2019-10-25 14:25:30
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-25 14:29:24
 */

'use strict';

const Controller = require('egg').Controller;

class Base_controllerController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(data) {
    this.ctx.body = {
      success: true,
      data,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = Base_controllerController;
