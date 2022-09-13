const sequelize = require('sequelize');
const componenteSequelize = new sequelize('bdproduto','root','0123',
{
dialect:'mysql', host:'localhost'
});
module.exports = componenteSequelize;