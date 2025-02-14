const path = require('path');
const {Sequelize} = require('sequelize');

const dbPath = path.join(__dirname, "../../db.sqlite");
const sequelize = new Sequelize({
    storage: dbPath ,
    dialect: 'sqlite',
    sync:true ,
    logging:console.log 
});

module.exports = {sequelize};