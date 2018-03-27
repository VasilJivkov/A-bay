'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        min: 5,
        max: 20,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 5,
        max: 15,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 5,
        max: 15,
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 5,
        max: 15,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 5,
        max: 20,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 5,
        max: 30,
      },
    },
    city: {
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

  Users.associate = (models) => {
    const {
      Products,
    } = models;

    Users.belongsToMany(Products, {
      through: 'favorites',
    });
  };

  return Users;
};
