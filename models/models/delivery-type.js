'use strict';

module.exports = (sequelize, DataTypes) => {
    const DeliveryType = sequelize.define('DeliveryType', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                min: 4,
                max: 15,
            },
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    DeliveryType.associate = (models) => {
        const {
            Products,
        } = models;

        DeliveryType.belongsToMany(Products, {
            through: 'products_delivery_type',
        });
    };

    return DeliveryType;
};
