/*
 * @Author: Tiny
 * @Date: 2019-10-28 10:08:29
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-29 15:59:28
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
  	const { ctx } = this;
  	const data = {
		name: 'test', 
		age: 11, 
		created_at: Date.now(), 
		updated_at: Date.now()
  	}
  	// const insertData = await ctx.model.User.create(data);
    const user = await ctx.model.User.findAll();
    // const queryId = await ctx.model.User.findByPk(14);
    // if (!queryId) {
    // 	ctx.status = 404;
    // 	return;
    // }
    // await queryId.destroy();
    return { user };
  }
}

module.exports = UserService;
