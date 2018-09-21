const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let SleepSchema=new Schema({
    user_id:String,
    start_time:Date,
    end_time:Date,
    sleep_total:String
})
module.exports=SleepSchema