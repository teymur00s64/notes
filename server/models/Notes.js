const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const User = require('./User');

const Notes = sequelize.define('Notes', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
    
});

//Notes.belongsTo(User)

sequelize.sync()

module.exports = Notes;