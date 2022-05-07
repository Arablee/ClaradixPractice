const db = require("./DbConfig/DbConnection")
const userAPI = require("./controllers/user")
const carAPI = require("./controllers/userCar")
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

require('dotenv').config()

const PORT = process.env.PORT;

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

// router

app.post("/add", userAPI.createUser);
app.post("/update", userAPI.updateOneUser);
app.post("/updateAll", userAPI.updateManyUser);
app.post("/addCar", carAPI.createUserCar);
app.post("/findCar", carAPI.findOneCar);

db.setup().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started");
    })
})
