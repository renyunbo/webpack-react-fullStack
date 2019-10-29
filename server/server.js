const express = require('express');
const ReactSSR = require('react-dom/server');//利用react SSR进行服务端渲染
const serverEntry = require('../dist/server-entry').default;//引用服务端代码
const fs = require('fs');//读取文件
const path = require('path');

const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8');
const app = express();

app.use('/public',express.static(path.join(__dirname,'../dist')));//以/public开头的文件以静态文件渲染

app.get('*',function(req,res){//从服务器获取的任何请求
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(template.replace('<app></app>',appString));//将<app></app>中的内容替换
});

app.listen(3333,function(){
    console.log('server is listening on 3333');
})