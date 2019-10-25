'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    const createRule = {
      title: {
        type: 'string',
      },
      content: {
        type: 'string',
      },
    };
    // validate params
    try {
      ctx.validate(createRule);
    } catch (err) {
      ctx.logger.warn(err.errors);
      ctx.body = {
        success: false,
        status: 400,
      };
    }

    // 组装参数
    const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body, { author });

    // 调用service进行业务处理
    const res = await service.home.index(req);

    // 设置响应内容和状态码
    ctx.body = {
      id: res.id,
    };
    ctx.status = 200;
  }
}

module.exports = HomeController;
