const { MongoClient } = require("mongodb")

var UserSchema = new MongoClient.Schema({
    id: Number,
    username: String,
    email: String
}, {timestamps: true});

MongoClient.model('User', UserSchema);