const {
    Categories,
    City,
    DeliveryType,
} = require('../../models/models');

const Data = require('./generic-data');
const UsersData = require('./user-data');
const ProductsData = require('./products-data');


module.exports = {
    users: new UsersData(),
    products: new ProductsData(),
    categories: new Data(Categories),
    cities: new Data(City),
    deliveryType: new Data(DeliveryType),
};