const express=require('express')
const app=express()
const bodyParser=require('body-parser')
//连接数据库
const mongoose =require('./config/mongoose')
const db=mongoose()
//用户模块
const account=require('./controllers/account')
const helmet = require('helmet');
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>res.send('Hello World'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
//登录注册
app.use('/account',account)

app.listen(port)