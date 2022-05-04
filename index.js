const db = require("./DbConfig/DbConnection")
const userAPI = require("./controllers/user")
const express = require('express');
const app = express();


const PORT = process.env.PORT;


app.use("/", userAPI);


db().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started");
    })
})