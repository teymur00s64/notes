const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const Notes = require('./Notes');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }

});

//User.hasMany(Notes)

sequelize.sync()

module.exports = User;