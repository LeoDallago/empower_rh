//CONEXÃO COM O BANCO DE DADOS
const Sequelize = require('sequelize')

//INFORMAÇÕES DE LOGIN DO BANCO DE DADOS
const sequelize = new Sequelize("db_empowerRH", "root", "12345678", {
    host: 'localhost',
    dialect: 'mysql',
})

//VERIFICA A CONEXÃO COM O BANCO DE DADOS
sequelize.authenticate()
.then(function(){
    console.log('conexão com o banco de dados realizada com sucesso!')
}).catch(function(){
    console.log('erro: conexão não efetuada com o banco de dados')
})

module.exports = sequelize