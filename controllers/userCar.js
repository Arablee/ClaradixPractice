const userCarModel = require("../Models/userCarModel.js")

const createUserCar = async (req, res, next) => {
    try {
        const {brand, model, number} = req.body
        if(!brand && !model && !number){
            res.status(404).send()
        }
        const car = await userCarModel.create({ brand:brand, model: model, number: number})
        car.save()
        res.status(200).send(car);
    }catch (err){
        console.log(err)
        res.status(404).send(err)
    }
}

const findOneCar = async () => {
      const car = await userCarModel.findOne({brand:'Mercedes'}).populate('number').then((doc)=>{
          return {name:doc.number.username,brand:doc.brand};
      }).catch((error)=>{
          return error
      })
    console.log(car)
}

module.exports = {createUserCar, findOneCar}