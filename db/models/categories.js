'use strict';
module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Categories.associate = (models) => {
    };

    return Categories;
};
