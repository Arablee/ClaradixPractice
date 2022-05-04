const db = require("./DbConfig/DbConnection")
const userAPI = require("./controllers/user")
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

require('dotenv').config()

const PORT = process.env.PORT;

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post("/add", userAPI.createUser);

db.setup().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started");
    })
})
