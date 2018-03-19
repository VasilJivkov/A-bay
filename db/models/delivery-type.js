'use strict';
module.exports = (sequelize, DataTypes) => {
    const DeliveryType = sequelize.define('DeliveryType', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
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
            foreignKey: 'fk_products_id',
            through: 'products_delivery_type',
        });
    };

    return DeliveryType;
};
