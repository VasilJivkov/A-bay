const {
    Users,
    Products,
    Categories,
    Cities,
    DeliveryType,
} = require('../../models/models');

const Data = require('./generic-data');

module.exports = {
    users: new Data(Users),
    products: new Data(Products),
    categories: new Data(Categories),
    cities: new Data(Cities),
    deliveryType: new Data(DeliveryType),
};

