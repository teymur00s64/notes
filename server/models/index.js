const User = require('./User')
const Notes = require('./Notes')
module.exports = () => {
        Notes.belongsTo(User , {
            foreignKey: "userId",
            as: "user"
        })
    
        User.hasMany(Notes , {
            foreignKey: "userId",
            as: "notes"
        })
}