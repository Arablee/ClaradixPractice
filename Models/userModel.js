const {Schema, model} = require('mongoose');
const userCarModel = require("./userCarModel");


const userSchema =new Schema({
    _id: Schema.Types.ObjectId,
    username: String,
    email: String,
    cars: [{ type: Schema.Types.ObjectId, ref: 'UserCar' }]
}, {timestamps: true},{autoCreate:true});

module.exports = model('User', userSchema);
