'use strict';

const Controller = require('egg').Controller;

module.exports = class extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, serializer';
  }

  async search() {
    const { ctx } = this;
    const result = {
      count: 1000,
      time: 10,
      user: {
        name: 'ok',
        age: 18,
      },
      last_editor: {
        name: 'mike',
      },
      book: {
        title: 'nodejs deep',
        price: 100,
      },
    };

    const options = {};
    if (ctx.query.null) options.null = true;
    ctx.body = ctx.serialize('api.search', result, options);
  }

  async user() {
    const { ctx } = this;
    const user = {
      name: 'fengmk2',
      age: 30,
      title: 'nodejs',
    };
    ctx.body = ctx.serialize('user', user);
  }

  async empty() {
    const { ctx } = this;
    const user = {
      name: 'fengmk2',
      age: 30,
      title: 'nodejs',
    };
    ctx.body = ctx.serialize('empty', user);
  }

  async users() {
    const { ctx } = this;
    const users = [
      0,
      {
        name: 'fengmk2',
        age: 30,
        title: 'nodejs',
      },
      undefined,
      {
        name: 'fengmk3',
        age: 3,
        title: 'java',
      },
      null,
      {
        set name(value) { console.log(value); },
        get age() { return 50; },
        title: 'ocaml',
      },
    ];
    ctx.body = ctx.serialize('user', users);
  }
};
