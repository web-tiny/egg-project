'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;

    // 调用service进行业务处理
    const res = await service.home.index();

    // 设置响应内容和状态码
    ctx.body = {
      res,
    };
    ctx.status = 200;
  }
}

module.exports = HomeController;
