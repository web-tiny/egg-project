/*
 * @Author: Tiny
 * @Date: 2019-10-29 11:20:37
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-29 16:01:09
 */
'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/topics.test.js', () => {
  it('should post /api/v2/topics/422', () => {
    app.mockCsrf();

    return app.httpRequest()
      .post('/api/v2/topics')
      .send({
        accesstoken: '123',
      })
      .expect(422)
      .expect({
        error: 'Validation failed',
        detail: [
          { message: 'required', field: 'title', code: 'missing_field' },
          { message: 'required', field: 'content', code: 'missing_field' },
        ],
      });
  });

  it('should post /api/v2/topics/ 201', () => {
    app.mockCsrf();
    app.mockService('topics', 'create', 123);
    return app.httpRequest()
      .post('/api/v2/topics')
      .send({
        accesstoken: '123',
        title: 'title',
        content: 'hello',
      })
      .expect(201)
      .expect({
        topic_id: 123,
      });
  });
});
