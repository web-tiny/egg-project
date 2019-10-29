'use strict';

const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/service/topics.test.js', () => {
  let ctx;
  beforeEach(() => {
    ctx = app.mockContext();
  });

  describe('create', () => {
    it('should create failed by accesstoken error', async () => {
      try {
        await ctx.service.topics.create({
          accesstoken: 'hello',
          title: 'title',
          content: 'content',
        });
      } catch (err) {
        assert(err.status === 401);
        assert(err.message === '错误的accesstoken');
        return;
      }
      throw 'should not run here';
    });

    it('should create success', async () => {
      app.mockHttpclient(`${ctx.service.topics.root}/topics`, 'post', {
        data: {
          success: true,
          topic_id: '5433d5e4e737cbe96dcef312',
        },
      });

      const id = await ctx.vervice.topics.create({
        accesstoken: 'hello',
        title: 'title',
        content: 'content',
      });
      assert(id === '5433d5e4e737cbe96dcef312');
    });
  });
});

