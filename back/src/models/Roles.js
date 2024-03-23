const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Role', {
        roleId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        description:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
  },{ timestamps: false });
};