const userModel = require("../Models/userModel.js")

const createUser = async (req, res, next) => {
    try {
        const {username, email} = req.body
        if(!username && !email){
            res.status(404).send()
        }
        const user = await userModel.create({ username:username, email: email})
        user.save()
        res.status(200).send(user);
    }catch (err){
        console.log(err)
        res.status(404).send(err)
    }
}

const updateUser = async (req, res, next) => {
    try{
        const {username, email} = req.body
        const user = await userModel.updateMany({username: username}, {email:email})
        res.status(200).send(user);
    }catch (err){
        console.log(err)
        res.status(404).send(err)
    }
}
module.exports = {createUser, updateUser}