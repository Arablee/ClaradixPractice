const db = require("./DbConfig/DbConnection")
const express = require('express');
const app = express();

const PORT = process.env.PORT;

db().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started");
    })
})