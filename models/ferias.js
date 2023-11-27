const Sequelize = require('sequelize')
const db = require('./db')
const sequelize = require('./db')

const ferias = db.define('ferias', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    departamento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dataInicio: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    dataFim: {
        type: Sequelize.DATE,
        allowNull: false,
    },
})

//CRIA A TABELA USERS NO BANCO DE DADOS
//ferias.sync()

//VERIFICA SE A ALGUMA ALTERAÇÃO NA TABELA 
//ferias.sync({ alter: true })

module.exports = ferias