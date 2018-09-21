const mongoose = require('mongoose');
const UserSchema = require('../schemas/UserSchema');
//创建model，这个地方的ch_user对应mongodb数据库中ch_users的conllection。
//mongoose会自动改成复数，如模型名：xx―>xxes, kitten―>kittens, money还是money
const User = mongoose.model('user',UserSchema);
module.exports = User;