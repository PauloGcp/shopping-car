const Car = require('../models/Car')

class carsController {
    constructor(dao){
        this.dao = dao
    }

    //this lexico 
    index = async(req, res)=>{
        const cars = await this.dao.find()
        return res.json(cars)
    }

    create = async(req, res) => {
        const car = await this.dao.create(req.body)
        return res.status(201).json(car)
    }
}


module.exports = new carsController(Car)