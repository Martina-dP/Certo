const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Role', {
        roleId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
};