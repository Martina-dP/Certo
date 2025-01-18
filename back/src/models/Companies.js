const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Company', {
        company_ID: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        company_name: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        owner_name: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        company_email: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
    },{ timestamps: false });
};