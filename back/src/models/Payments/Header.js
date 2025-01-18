const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Header', {
        operationID:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        prov_client_ID:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        invoice_num:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        date:{ 
            type : DataTypes.DATE,
            allowNull: false,
        },
        sub_total:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        porcentage_tax:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        import_tax:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        porcentage_IIBB:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        import_IIBB:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        discount:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        total:{ 
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        // Operation_type
        // payMethID
        // userID
    });
};