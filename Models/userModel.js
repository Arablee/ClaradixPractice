const {Schema, model} = require('mongoose');
const userCarModel = require("./userCarModel");

const userSchema =new Schema({
    username:{type:String},
    email: {type:String},
    cars: [{ type: Schema.Types.ObjectId, ref: 'UserCar' }]
}, {timestamps: true},{autoCreate:true});


module.exports = model('User', userSchema);
