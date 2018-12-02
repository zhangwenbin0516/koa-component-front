"use strict"
const fs = require('fs');
const Router = require('koa-router');
const router = new Router();
router.get('/*', async (ctx, next) => {
    console.log(ctx)
    ctx.body = 'asda'
});

module.exports = router;