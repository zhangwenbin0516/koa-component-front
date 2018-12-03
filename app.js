"use strict"
const path = require('path');
const koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router/');
const statics = require('koa-static');

const app = new koa();

app.use(koaBody({
  multipart: true,
  encoding: 'gzip',
  formidable: {
    uploadDir: path.join(__dirname, './public/uploads'),
    maxFileSize: 500*1024*1024,    // 设置上传文件大小最大限制，默认5M
    patchKoa: true
  }
}));

const fileReady = statics(path.join(__dirname, '/public/'));

app.use(fileReady);
app.use(router.routes(), router.allowedMethods());

module.exports = app;