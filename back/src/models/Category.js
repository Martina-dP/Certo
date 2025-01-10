const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
        categoryId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name:{ 
            type : DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        active:{ 
            type : DataTypes.BOOLEAN,
            defaultValue: true,
        },
    });
};