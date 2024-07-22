const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Notes = sequelize.define('Notes', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
});



sequelize.sync()

module.exports = Notes;