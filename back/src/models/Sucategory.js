const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Subcategory', {
        subcategoryId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        sub_category_name:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        active:{ 
            type : DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
                key: 'categoryId',
            },
        },
    });
};