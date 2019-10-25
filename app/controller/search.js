'use strict';
exports.index = async ctx => {
  // query String 方式获取参数
  ctx.body = `search: ${ctx.query.name}`;
  const type = ctx.query.type;
  const q = ctx.query.q || 'nodejs';

  if (type === 'bing') {
    ctx.redirect(`http://cn.bing.com/search?q=${q}`);
  } else {
    ctx.redirect(`https://www.google.co.kr/search?q=${q}`);
  }
};
