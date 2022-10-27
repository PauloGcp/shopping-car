const service = require('../services/login.service')

class loginController {
    constructor(loginService) {
        this.loginService = loginService
    }

    login = (req, res) => {
        this.loginService
            .autenticate(req.body)
            .then((user) => user ? res.json(user) : res.status(400).json({ message: 'Usuário ou senha inválidos' }))
            .catch(console.log)
    }
}

module.exports = new loginController(service)