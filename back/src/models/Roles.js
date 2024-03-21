const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('role', {
        roleId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        description:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
  },{ timestamps: false });
};