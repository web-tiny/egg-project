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
    const user = await this.app.mysql.get('pets', { name: 'tiny' });
    return { user };
  }
}

module.exports = UserService;