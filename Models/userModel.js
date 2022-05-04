const {Schema, model} = require('mongoose');
const userSchema =new Schema({
    username: String,
    email: String
}, {timestamps: true},{autoCreate:true});

module.exports = model('User', userSchema);