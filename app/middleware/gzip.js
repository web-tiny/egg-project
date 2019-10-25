/*
 * @Author: Tiny
 * @Date: 2019-10-25 10:55:08
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-10-25 11:17:41
 */
'use strict';

const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => {

  return async function gzip(ctx, next) {
    await next();
    let body = ctx.body;
    if (!body) return;

    if (options.threshold && ctx.length < options.threshold) return;

    if (isJSON(body)) body = JSON.stringify(body);

    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');
  }
}