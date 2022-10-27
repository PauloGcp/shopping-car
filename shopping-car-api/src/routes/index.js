const router = require('express').Router()

const carsControllers = require("../controllers/carsControllers");
const loginController = require('../controllers/loginController')

router.get('/cars', carsControllers.index)

router.post('/cars', carsControllers.create)

router.post('/login', loginController.login)

module.exports = router;
