/*
 * @Author: Tiny
 * @Date: 2019-10-29 11:11:09
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-29 11:17:53
 */
'use strict';

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.app.emit('error', err, ctx);

      const status = err.status || 500;

      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;

      ctx.body = { error };

      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
    }
  };
};
