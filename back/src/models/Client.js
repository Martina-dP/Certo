const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Client', {
        clientId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        lastName:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        DNI:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        taxStatus:{ 
            type : DataTypes.INTEGER,
        },
        birthday:{ 
            type : DataTypes.DATE,
        },
        authorized_margin:{ 
            type : DataTypes.INTEGER,
        },
        address:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        state:{ 
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