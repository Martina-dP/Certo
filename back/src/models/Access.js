const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Access', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      permission_roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Roles',
          key: 'roleId',
        },
        allowNull: false,
      },
      permission_featureId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Features',
          key: 'id',
      },
    },
  },{ timestamps: false });
};