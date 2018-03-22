const {
    Users,
    Products,
    Categories,
    Cities,
} = require('../../models/models');

const Data = require('./generic-data');

module.exports = {
    users: new Data(Users),
    products: new Data(Products),
    categories: new Data(Categories),
    cities: new Data(Cities),
};
