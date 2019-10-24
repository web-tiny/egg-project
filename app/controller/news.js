/*
 * @Author: Tiny
 * @Date: 2019-10-23 16:08:40
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-24 22:00:09
 */
'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    // const page = ctx.query.page || 1;
    // const newsList = await ctx.service.news.list(page);
    const dataList = {
      list: [{
          id: 1,
          title: 'this is news 1',
          url: '/news/1'
        },
        {
          id: 2,
          title: 'this is news 2',
          url: '/news/2'
        },
      ],
    };
    // await ctx.render('news/list.tpl', { list: newsList });
    await ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;