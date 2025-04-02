const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('TypeOperation', {
        operation_typeID:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
    });
};