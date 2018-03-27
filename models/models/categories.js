'use strict';

module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                min: 4,
                max: 20,
            },
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Categories.associate = (models) => {
    };

    return Categories;
};
