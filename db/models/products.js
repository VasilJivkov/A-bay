'use strict';
module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Products.associate = (models) => {
    };

    return Products;
};
