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

            productModel.price = +productModel.price;
            productModel.fk_city_id = +productModel.cityId;
            productModel.fk_category_id = +productModel.categoryId;
            productModel.fk_user_id = userId;
            productModel.status = 'ACTIVE';

            const deliveryIds = Array.isArray(productModel.deliveryTypeId) ?
                productModel.deliveryTypeId : [productModel.deliveryTypeId];

            const deliveryTypes = await Promise.all(deliveryIds.map((id) => {
                return data.deliveryType.getById(+id);
            }));

            const product = await data.products.create(productModel);
            await product.setDeliveryTypes(deliveryTypes);

            res.redirect('/');
        });

    app.use('/', router);
};

module.exports = {
    init,
};
