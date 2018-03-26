'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "name" on table "Categories"
 * changeColumn "name" on table "Cities"
 * changeColumn "name" on table "DeliveryTypes"
 *
 **/

var info = {
    "revision": 3,
    "name": "noname",
    "created": "2018-03-26T21:45:19.984Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Categories",
            "name",
            {
                "type": Sequelize.STRING,
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
            "Cities",
            "name",
            {
                "type": Sequelize.STRING,
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
            "DeliveryTypes",
            "name",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "min": 4,
                    "max": 15
                },
                "allowNull": false,
                "unique": true
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
