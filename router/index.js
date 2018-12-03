"use strict"
const fs = require('fs');
const path = require('path');
const Router = require('koa-router');

const router = new Router();

router.get('/*', async (ctx, next) => {
  let reg = /^\/(api|uploads)/;
  if (!reg.test(ctx.request.path)) {
    ctx.body = 'asda'
  }
  next();
});
router.post('/upload/*', async (ctx, next) => {
  let file = ctx.request.files;
  console.log(file,'sdd')

  /*let reader = fs.createReadStream(file.path);
  let date = new Date();
  let newFile = date.getTime() + '.' + file.name.split('.')[1];
  let filePath = path.join(__dirname, '..', 'public/uploads/') + `/${newFile}`;
  let writeFile = fs.createWriteStream(filePath);
  reader.pipe(writeFile);*/
  ctx.body = {
    code: 200,
    data: {
      url: 'http://' + ctx.headers.host + '/uploads/' //+ newFile
    },
    message: 'OK'
  }
  next();
});
module.exports = router;