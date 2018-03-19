'use strict';
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    City.associate = (models) => {

    };

    return City;
};