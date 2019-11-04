'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
  	enable: true,
  	package: 'egg-mysql',
  },
  sequelize: {
	enable: true,
	package: 'egg-sequelize',
  },
  validate: {
  	enable: true,
    package: 'egg-validate',
  },
  nunjucks: {
  	enable: true,
    package: 'egg-view-nunjucks',
  }
};

