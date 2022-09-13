const sequelize = require('sequelize');
const database = require('./bd');
const produto = database.define('produto', 
{
id:
{
    type: sequelize.INTERGER, 
    autoIncrement: true,
    allowNull : false,
    primaryKey: true
} ,
nome: {
    type: sequelize.STRING,
    allowNull : false,
},
DataCriacao:
{
    type: sequelize.DATE,
    allowNull : false,
}
}
)
module.exports = produto;