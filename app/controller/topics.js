/*
 * @Author: Tiny
 * @Date: 2019-10-29 10:53:28
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-29 10:58:39
 */

'use strict';

const Controller = require('egg').Controller;

const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: {
    type: 'enum',
    values: [ 'ask', 'share', 'job' ],
    required: false,
  },
};

class TopicsController extends Controller {
  async create() {
    const { ctx } = this;
    ctx.validate(createRule, ctx.request.body);

    const id = await ctx.service.topics.create(ctx.request.body);

    ctx.body = {
      topic_id: id,
    };
    ctx.status = 201;
  }
}

module.exports = TopicsController;
