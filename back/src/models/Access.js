const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Access', {
      roleId:{ 
        type : DataTypes.INTEGER,
        allowNull: false,
      },
      superAdmin: {
        type : DataTypes.BOOLEAN,
        defaultValue: false,
      },
      stock: {
        type : DataTypes.BOOLEAN,
        defaultValue: false,
      },
      cashManagment: {
        type : DataTypes.BOOLEAN,
        defaultValue: false,
      },
      abm: {
        type : DataTypes.BOOLEAN,
        defaultValue: false,
      },
      reports: {
        type : DataTypes.BOOLEAN,
        defaultValue: false,
      },
      adminManagment: {
        type : DataTypes.BOOLEAN,
        defaultValue: false,
      },
      quickSearch: {
        type : DataTypes.BOOLEAN,
        defaultValue: false,
      },
  },{ timestamps: false });
};