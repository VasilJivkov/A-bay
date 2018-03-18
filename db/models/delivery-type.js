'use strict';
module.exports = (sequelize, DataTypes) => {
    const DeliveryType = sequelize.define('DeliveryType', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    DeliveryType.associate = (models) => {
    };

    return DeliveryType;
};
