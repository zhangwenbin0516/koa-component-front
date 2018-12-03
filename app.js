"use strict"
const path = require('path');
const koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router/');
const statics = require('koa-static');

const app = new koa();

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 500 * 1024 * 1024
  }
}));

const fileReady = statics(path.join(__dirname, '/public/'));

app.use(fileReady);
app.use(router.routes(), router.allowedMethods());

module.exports = app;