'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * dropTable "ProductsDeliveryType"
 * createTable "products_delivery_type", deps: [DeliveryTypes, Products]
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2018-03-19T15:36:53.624Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "dropTable",
        params: ["ProductsDeliveryType"]
    },
    {
        fn: "createTable",
        params: [
            "products_delivery_type",
            {
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "fk_products_id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "DeliveryTypes",
                        "key": "id"
                    },
                    "primaryKey": true
                },
                "fk_delivery_type_id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Products",
                        "key": "id"
                    },
                    "primaryKey": true
                }
            },
            {}
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
