const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Provider', {
        providerId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        organization:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        description:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        CUIT:{ 
            type : DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        state:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        phone:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        email:{ 
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