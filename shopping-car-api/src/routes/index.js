const router = require('express').Router()

const carsControllers = require("../controllers/carsControllers");

router.get('/cars', carsControllers.index)

router.post('/cars', carsControllers.create)

module.exports = router;
