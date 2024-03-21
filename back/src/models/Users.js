const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
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
      status:{
        type : DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      roleId:{
        type : DataTypes.INTEGER,
        allowNull: false,
      },
  },{ timestamps: false });
};

