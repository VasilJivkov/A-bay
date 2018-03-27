const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();
    router
    .get('/add', async (req, res) => {
        const cities = await data.cities.getAll();
        const categories = await data.categories.getAll();
        const deliveryType = await data.deliveryType.getAll();
        const context = {
            cities,
            categories,
            deliveryType,
        };

        res.render('forms/add', context);
    })
    .post('/add', async (req, res) => {
        const productModel = req.body;
        const userId = 1;
        productModel.cityId = +productModel.cityId;
        productModel.categoryId = +productModel.categoryId;
        productModel.status = 'ACTIVE';
        const delivery = Array.isArray(productModel.deliveryTypId) ?
            productModel.deliveryTypeId : [productModel.deliveryTypeId];

        const product = await data.products.create(productModel);
        product.setStatus('ACTIVE');
        product.setDeliveryType(delivery);
    });

    app.use('/', router);
};

module.exports = {
    init,
};
