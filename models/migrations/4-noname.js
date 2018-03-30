'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "fk_city_id" on table "Products"
 * changeColumn "id" on table "Categories"
 * changeColumn "createdAt" on table "Categories"
 * changeColumn "updatedAt" on table "Categories"
 * changeColumn "id" on table "Cities"
 * changeColumn "name" on table "Cities"
 * changeColumn "createdAt" on table "Cities"
 * changeColumn "updatedAt" on table "Cities"
 * changeColumn "id" on table "DeliveryTypes"
 * changeColumn "name" on table "DeliveryTypes"
 * changeColumn "createdAt" on table "DeliveryTypes"
 * changeColumn "updatedAt" on table "DeliveryTypes"
 * changeColumn "id" on table "Products"
 * changeColumn "title" on table "Products"
 * changeColumn "desc" on table "Products"
 * changeColumn "price" on table "Products"
 * changeColumn "picture" on table "Products"
 * changeColumn "status" on table "Products"
 * changeColumn "createdAt" on table "Products"
 * changeColumn "updatedAt" on table "Products"
 * changeColumn "name" on table "Categories"
 * changeColumn "fk_user_id" on table "Products"
 * changeColumn "fk_category_id" on table "Products"
 * changeColumn "id" on table "Users"
 * changeColumn "username" on table "Users"
 * changeColumn "password" on table "Users"
 * changeColumn "email" on table "Users"
 * changeColumn "firstName" on table "Users"
 * changeColumn "lastName" on table "Users"
 * changeColumn "address" on table "Users"
 * changeColumn "city" on table "Users"
 * changeColumn "createdAt" on table "Users"
 * changeColumn "updatedAt" on table "Users"
 * changeColumn "createdAt" on table "products_delivery_type"
 * changeColumn "updatedAt" on table "products_delivery_type"
 * changeColumn "DeliveryTypeId" on table "products_delivery_type"
 * changeColumn "ProductId" on table "products_delivery_type"
 * changeColumn "createdAt" on table "favorites"
 * changeColumn "updatedAt" on table "favorites"
 * changeColumn "ProductId" on table "favorites"
 * changeColumn "UserId" on table "favorites"
 *
 **/

var info = {
    "revision": 4,
    "name": "noname",
    "created": "2018-03-30T22:19:49.771Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Products",
            "fk_city_id",
            {
                "type": INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Cities",
                    "key": "id"
                },
                "allowNull": false,
                "name": "fk_city_id"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Categories",
            "id",
            {
                "type": INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Categories",
            "createdAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Categories",
            "updatedAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Cities",
            "id",
            {
                "type": INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Cities",
            "name",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 3,
                    "max": 15
                },
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Cities",
            "createdAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Cities",
            "updatedAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "DeliveryTypes",
            "id",
            {
                "type": INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "DeliveryTypes",
            "name",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 4,
                    "max": 15
                },
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "DeliveryTypes",
            "createdAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "DeliveryTypes",
            "updatedAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "id",
            {
                "type": INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "title",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 10,
                    "max": 20
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "desc",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 10,
                    "max": 25
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "price",
            {
                "type": DECIMAL,
                "validate": {
                    "isNumeric": true
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "picture",
            {
                "type": VARCHAR(255),
                "validate": {
                    "isUrl": true
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "status",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 3,
                    "max": 10
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "createdAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "updatedAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Categories",
            "name",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 4,
                    "max": 20
                },
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "fk_user_id",
            {
                "type": INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Users",
                    "key": "id"
                },
                "allowNull": false,
                "name": "fk_user_id"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Products",
            "fk_category_id",
            {
                "type": INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Categories",
                    "key": "id"
                },
                "allowNull": false,
                "name": "fk_category_id"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "id",
            {
                "type": INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "username",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 5,
                    "max": 20
                },
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "password",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 5,
                    "max": 15
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "email",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 5,
                    "max": 15,
                    "isEmail": true
                },
                "unique": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "firstName",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 5,
                    "max": 15
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "lastName",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 5,
                    "max": 20
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "address",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 5,
                    "max": 30
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "city",
            {
                "type": VARCHAR(255),
                "validate": {
                    "min": 3,
                    "max": 10
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "createdAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "updatedAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "products_delivery_type",
            "createdAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "products_delivery_type",
            "updatedAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "products_delivery_type",
            "DeliveryTypeId",
            {
                "type": INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "DeliveryTypes",
                    "key": "id"
                },
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "products_delivery_type",
            "ProductId",
            {
                "type": INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Products",
                    "key": "id"
                },
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "favorites",
            "createdAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "favorites",
            "updatedAt",
            {
                "type": DATETIME,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "favorites",
            "ProductId",
            {
                "type": INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Products",
                    "key": "id"
                },
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "favorites",
            "UserId",
            {
                "type": INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Users",
                    "key": "id"
                },
                "primaryKey": true
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
