/*
 * @Author: Tiny
 * @Date: 2019-10-23 16:08:40
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-23 16:47:28
 */
'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'this is news 1', url: '/news/1' },
    //     { id: 2, title: 'this is news 2', url: '/news/2' },
    //   ],
    // };
    console.log('news:', await ctx.service.news);
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;