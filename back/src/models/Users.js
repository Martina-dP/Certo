const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
      id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type : DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type : DataTypes.STRING,
        allowNull: false,
      },
      user: {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      active:{
        type : DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      role:{
        type : DataTypes.ENUM("superAdmin", "admin", "employer"),
        allowNull: false,
      },
      
  });
};

