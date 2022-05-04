const mongoose = require("mongoose")

const setup = async () => {
    const dbAddress = "mongodb+srv://arablee:2478232g@firstcluster.8g6pd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    try{
        return await  mongoose.connect(dbAddress)
    }catch (err){
        throw err
    }
}

module.exports = {setup}