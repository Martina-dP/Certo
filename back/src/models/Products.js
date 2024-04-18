const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        productId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        color:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        cost:{ 
            type : DataTypes.INTEGER,
        },
        size:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        profit_margin:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        final_price:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        min_stock:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        active:{ 
            type : DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    });
};