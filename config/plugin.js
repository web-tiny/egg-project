'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
