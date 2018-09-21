const express=require('express')
const api=express.Router()
const Sleep=require('../models/Sleep')
const moment=require('moment')

api.post('/save',(req,res)=>{
    let {userId,sTime,eTime,calTime}=req.body
    let result=moment(calTime).isSame(eTime, 'day');
    if(!result){
        res.json({
            code:0,
            message:'该记录无效'
        })
        return
    }
    res.json({
        result
    })
    // Sleep.findOneAndUpdate({
    //     userId,
    //     eTime
    // },{start_time:sTime,end_time:eTime},(err,docs)=>{
    //     if(!err){
    //         res.json({
    //             code:1,
    //             message:'保存成功'
    //         })
    //     }else{
    //         res.json({
    //             code:0,
    //             message:'请重试'
    //         })
    //     }
    // })
})


module.exports=api