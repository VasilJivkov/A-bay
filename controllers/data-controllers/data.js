const ProductsData = require('./products');
const UsersData = require('./users');
const DeliveryTypesData = require('./delivery-type');
const CategoriesData = require('./caregories');
const CititesData = require('./cities');


module.exports = {
    users: new UsersData(),
    products: new ProductsData(),
    categories: new CategoriesData(),
    cities: new CititesData(),
    deliveryType: new DeliveryTypesData(),
};

