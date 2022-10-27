const jwt = require('jsonwebtoken')

//simulação de banco de dados para que nao haja necessidade de implementação de cadastro de usuário
const db = [{userName: 'admin', password: 'admin'}]

const autenticate = async ({userName, password})=>{
    const user = db.find(user => user.password === password && user.userName === userName)
    if (user){
        const token = jwt.sign({userName}, 'configuraçaoDaAplicaçao')
        return {
            token,
            user
        }
    }
}

module.exports = {autenticate}