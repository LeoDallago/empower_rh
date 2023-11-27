//VARIAVEIS REQUERENTES 
const Sequelize = require('sequelize')
const db = require('./db')
const sequelize = require('./db')

//DEFINE AS COLUNAS E TIPOS DE DADOS NO BANCO
const user = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.BIGINT(254),
        allowNull: false,
    },
    nascimento: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    telefone: {
        type: Sequelize.BIGINT(254),
        allowNull: false,
    },
    estado_civil: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    departamento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    situacao: {
        type: Sequelize.STRING,
        allowNull: false,
    },


}, {
    updatedAt: false
})



//CRIA A TABELA USERS NO BANCO DE DADOS
//user.sync()

//VERIFICA SE A ALGUMA ALTERAÇÃO NA TABELA 
//user.sync({ alter: true })

module.exports = user