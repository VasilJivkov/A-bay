const {
    Users,
    Products,
    Categories,
    City,
    DeliveryType,
} = require('../../models/models');

const Data = require('./generic');

module.exports = {
    users: new Data(Users),
    products: new Data(Products),
    categories: new Data(Categories),
    cities: new Data(City),
    deliveryType: new Data(DeliveryType),
};

