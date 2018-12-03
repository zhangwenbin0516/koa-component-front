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
  let files = ctx.request.files;
  let lists = [];
  for (let file in files) {
    file = files[file];
    let reader = fs.createReadStream(file.path);
    let date = new Date();
    let newFile = date.getTime() + '.' + file.name.split('.')[1];
    let filePath = path.join(__dirname, '..', 'public/uploads/') + `/${newFile}`;
    let writeFile = fs.createWriteStream(filePath);
    reader.pipe(writeFile);
    lists.push({
      name: file.name,
      path: '/uploads/' + `/${newFile}`
    });
  }

  ctx.body = {
    code: 200,
    data: lists,
    message: 'OK'
  }
  next();
});
module.exports = router;