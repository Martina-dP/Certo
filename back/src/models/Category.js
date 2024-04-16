const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
        categoryId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        categoty_name:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        active:{ 
            type : DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    });
};