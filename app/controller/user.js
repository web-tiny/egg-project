/*
 * @Author: Tiny
 * @Date: 2019-10-25 13:16:32
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-30 13:21:53
 */

'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') {
    return str;
  }
  if (!str) {
    return str;
  }
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    // const user = await this.service.user.find(ctx.params.id);
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    // ctx.body = user;
    ctx.body = await ctx.model.User.findAll(query);
    // ctx.body = {
    //   name: `hello ${ctx.params.id}`,
    //   user: `${ctx.params.name}`,
    // };
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.model.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
