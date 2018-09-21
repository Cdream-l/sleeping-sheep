var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//创建Schema
var userSchema = new Schema({
    nick:String,
    email:String,
    telephone:String,
    password:String
});
module.exports = userSchema;