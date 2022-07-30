const Sequelize = require('sequelize');
let schema = require('./userSchema');

module.exports = sequelize => {
    const User = sequelize.define("user", schema, {
        freezeTableName: true,
        timestamps: false,
        tablename: "user"
    });
    return User;
}