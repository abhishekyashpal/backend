const Sequelize = require('sequelize');

module.exports = {
    id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaulyKey: Sequelize.UUIDV4
    },
    name: Sequelize.DataTypes.STRING,
    address: Sequelize.DataTypes.STRING,
    isActive: Sequelize.DataTypes.BOOLEAN,
    createdOn: Sequelize.DataTypes.BIGINT,
    updatedOn: Sequelize.DataTypes.BIGINT
}