const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//创建Schema
let userSchema = new Schema({
    nick:String,
    email:String,
    telephone:String,
    password:String
});
module.exports = userSchema;