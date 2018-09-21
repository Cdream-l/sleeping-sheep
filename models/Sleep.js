const mongoose=require('mongoose')
const SleepSchema=require('../schemas/SleepSchema')

const Sleep=mongoose.model('sleep',SleepSchema)

module.exports=Sleep