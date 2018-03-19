'use strict';
module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },db
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Categories.associate = (models) => {

    };
    return Categories;
};
