/*
 * @Author: Tiny
 * @Date: 2019-10-25 15:35:04
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-25 15:45:59
 */

'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index(req) {
    console.log('home req:', req);
    return {
      id: 111,
    };
  }
}

module.exports = HomeService;

