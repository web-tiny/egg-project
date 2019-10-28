/*
 * @Author: Tiny
 * @Date: 2019-10-25 13:16:32
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-28 10:46:38
 */

'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const user = await this.service.user.find(ctx.params.id);
    ctx.body = user;
    // ctx.body = {
    //   name: `hello ${ctx.params.id}`,
    //   user: `${ctx.params.name}`,
    // };
  }
}

module.exports = UserController;
