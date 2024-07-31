require('../database')
const User = require('./User')
const Notes = require('./Notes')

Notes.belongsTo(User , {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

User.hasMany(Notes , {
    foreignKey: "userId",
})

module.exports = {
    User,
    Notes
}