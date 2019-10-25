'use strict';

const Controller = require('../core/base_controller');

class FormController extends Controller {
  async post() {
    const posts = await this.service.listByUser(this.user);
    this.success(posts);
  }
}

module.exports = FormController;

