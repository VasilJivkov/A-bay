'use strict';

module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                min: 3,
                max: 15,
            },
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    City.associate = (models) => {
    };

    return City;
};
