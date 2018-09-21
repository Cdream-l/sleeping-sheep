const express=require('express')
const api = express.Router()
var User = require('../models/User')
api.post('/login',(req,res)=>{
    let {telephone,password}=req.body;
    console.log(telephone)
    User.find({
        telephone
    },(err,docs)=>{
        if(!err){
            console.log(docs)
            if(docs.length==1){
                if(password==docs[0].password){
                    res.json({
                        code:1,
                        message: `欢迎${docs[0].nick||''}回来`
                    })
                }else{
                    res.json({
                        code:0,
                        message:'密码错误'
                    })
                }
             
            }else{
                res.json({
                    code:1,
                    message: `请先注册`
                })
            }
        }else{
            res.json({
                code:0,
                message:'系统错误'
            })
        }
    })
   
})
api.post('/register',(req,res)=>{
    let {telephone,password}=req.body;
    User.find({
        telephone
    },(err,docs)=>{
        if(!err){
            res.json({
                code:0,
                message:'该用户已经存在,请登录'
            })
            return
        }
    })
    let user=new User({
        telephone,
        password
    })
    user.save((err)=>{
        if(!err){
            res.json({
                code:1,
                message:'保存成功'
            })
        }else{
            res.json({
                code:0,
                message:err
            })
        }
    })
})
module.exports=api
