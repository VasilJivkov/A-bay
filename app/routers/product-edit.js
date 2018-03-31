const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    const ProductsController = require('../controllers/products');
    const CategoriesConstructor = require('../controllers/categories');
    const DeliveryTypeConstructor = require('../controllers/categories');
    const CitiesConstructor = require('../controllers/cities');

    router
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const productsController = new ProductsController();
            const categoriesController = new CategoriesConstructor();
            const deliveryTypeConstructor = new DeliveryTypeConstructor();
            const citiesConstructor = new CitiesConstructor();

            const listing = await productsController.getFullInfo(id);
            const cities = await citiesConstructor.all;
            const categories = await categoriesController.all;
            const deliveryType = await deliveryTypeConstructor.all;

            const context = {
                listing,
                cities,
                categories,
                deliveryType,
            };

            res.render('products/edit', context);
        })
        .post('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const {
                title,
                desc,
                price,
                picture,
                cityId,
            } = req.body;

            const newData = [
                { title: title },
                { desc: desc },
                { price: price },
                { picture: picture },
                { cityId: cityId },
            ];

            try {
                await data.products.update(+id, newData);
            } catch (err) {
                console.log('Invalid tokens!');
            }
            res.redirect('/');
        });

    app.use('/edit', router);
};

module.exports = {
    init,
};
