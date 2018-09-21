const express=require('express')
const app=express()
const bodyParser=require('body-parser')
//连接数据库
const mongoose =require('./config/mongoose')
const db=mongoose()
//公共模块
const helmet = require('helmet');
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
//用户模块
const account=require('./controllers/account')
app.use('/account',account) //登陆注册

//睡眠记录
const sleep=require('./controllers/recordSleep')
app.use('/sleep',sleep)

app.listen(port)