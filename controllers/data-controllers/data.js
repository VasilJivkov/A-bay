const {
    ProductsData,
    UsersData,
    DeliveryTypesData,
    CategoriesData,
    CititesData,
} = require('./');

module.exports = {
    users: new UsersData(),
    products: new ProductsData(),
    categories: new CategoriesData(),
    cities: new CititesData(),
    deliveryType: new DeliveryTypesData(),
};

