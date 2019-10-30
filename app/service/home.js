/*
 * @Author: Tiny
 * @Date: 2019-10-25 15:35:04
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-30 17:04:53
 */

'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    // const result = await this.app.mysql.insert('users', { age: 10, nage: 'jrg', created_at: Date.now, updated_at: Date.now });
    // const insertSuccess = result.affectedRows === 1;
    // const result = await this.app.mysql.delete('users', { name: 'tiny' });
    const user = await this.app.mysql.get('users', { id: 1 });
    return {
      user,
    };
  }
}

module.exports = HomeService;

