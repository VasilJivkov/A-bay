'use strict';

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 10,
                max: 20,
            },
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 10,
                max: 25,
            },
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 3,
                max: 10,
            },
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Products.associate = (models) => {
        const {
            City,
            Users,
            Categories,
            DeliveryType,
        } = models;

        Products.belongsTo(City, {
            foreignKey: {
                name: 'fk_city_id',
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

        Products.belongsTo(Users, {
            foreignKey: {
                name: 'fk_user_id',
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

        Products.belongsTo(Categories, {
            foreignKey: {
                name: 'fk_category_id',
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

        Products.belongsToMany(DeliveryType, {
            through: 'products_delivery_type',
        });

        Products.belongsToMany(Users, {
            through: 'favorites',
        });
    };

    return Products;
};
