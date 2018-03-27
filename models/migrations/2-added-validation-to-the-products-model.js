'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "title" on table "Products"
 * changeColumn "desc" on table "Products"
 * changeColumn "price" on table "Products"
 * changeColumn "picture" on table "Products"
 * changeColumn "status" on table "Products"
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2018-03-26T21:40:03.645Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Products",
            "title",
            {
                "type": Sequelize.STRING,
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
                "type": Sequelize.STRING,
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
                "type": Sequelize.DECIMAL,
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
                "type": Sequelize.STRING,
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
                "type": Sequelize.STRING,
                "validate": {
                    "min": 3,
                    "max": 10
                },
                "allowNull": false
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
