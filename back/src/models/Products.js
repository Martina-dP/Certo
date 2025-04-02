const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        productId:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
                key: 'categoryId',
            },
        },
        subcategoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Subcategories',
                key: 'subcategoryId',
            },
        },
        color:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        cost:{ 
            type : DataTypes.INTEGER,
        },
        size:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        profit_margin:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        final_price:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        min_stock:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        minStock: {
            type: DataTypes.INTEGER,
        },
        companyId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Companies',
                key: 'company_ID',
            },
        },
    });
};