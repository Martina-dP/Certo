const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Detail', {
        operationID:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity:{ 
            type : DataTypes.INTEGER,
        },
        cost:{ 
            type : DataTypes.INTEGER,
        },
        item_discount:{ 
            type : DataTypes.INTEGER,
        },
    });
};