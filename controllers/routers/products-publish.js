const {
    Router,
} = require('express');

const {
    ProductController,
    CityController,
    CategoryController,
    DeliveryTypeController,
} = require('../controllers');

const init = (app, data) => {
    const router = new Router();

    const productController = new ProductController(data);
    const cityController = new CityController(data);
    const categoryController = new CategoryController(data);
    const deliveryTypeController = new DeliveryTypeController(data);

    router
        .get('/publish', async (req, res) => {
            const cities = await cityController.getAll();
            const categories = await categoryController.getAll();
            const deliveryType = await deliveryTypeController.getAll();
            const context = {
                cities,
                categories,
                deliveryType,
            };

            res.render('products/create', context);
        })
        .post('/publish', async (req, res) => {
            try {
                const productModel = req.body;
                const userId = 1;

                await productController.create(productModel, userId);
                res.redirect('/');
            } catch (err) {
                console.log(err);
                res.redirect('/listings');
            }
        });

    app.use('/', router);
};

module.exports = {
    init,
};
