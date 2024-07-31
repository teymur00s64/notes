const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Notes = sequelize.define('Notes', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
});

module.exports = Notes;