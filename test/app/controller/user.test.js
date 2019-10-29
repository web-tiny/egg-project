/*
 * @Author: Tiny
 * @Date: 2019-10-29 15:46:01
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-29 15:54:29
 */
'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  describe('get /user', () => {
    it('should work', async () => {
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/user?limit=2');
      assert(res.status === 200);
      assert(res.body.length === 2);
      assert(res.body[0].name);
      assert(res.body[0].age);
    });
  });

  describe('get /user/:id', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');
      const res = await app.httpRequest().get(`/uer/${user.id}`);
      assert(res.status === 200);
      assert(res.body.age === user.age);
    });
  });
});
