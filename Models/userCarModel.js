const {Schema, model} = require("mongoose");
const userModel = require("./userModel");

const userCarSchema =new Schema({
    brand: String,
    model: String,
    number: { type: Schema.Types.ObjectId, ref: 'User' },
}, {timestamps: true},{autoCreate:true});

module.exports = model('UserCar', userCarSchema);









/*const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});*/
