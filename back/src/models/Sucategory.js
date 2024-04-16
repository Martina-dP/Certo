const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Subcategory', {
        subcategoryId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        sub_categoty_name:{ 
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