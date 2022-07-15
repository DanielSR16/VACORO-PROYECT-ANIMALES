const { Sequelize } = require('sequelize');
const usuarioModel =  require("../model/usuario")
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.PASSWORD_DB, {
    host: process.env.HOSTDB,
    dialect: process.env.DIALECT 
});

 
// const user =  usuarioModel(sequelize,Sequelize);
const db = {}
db.Sequelize = Sequelize;
db.sequelize =  sequelize;
db.vaca = require("../model/vacas")(sequelize,Sequelize)
db.toro = require("../model/toros")(sequelize,Sequelize)
db.becerro = require("../model/becerros")(sequelize,Sequelize)



module.exports = {db};