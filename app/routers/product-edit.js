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
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;
            const user = req.user;
            const listing = await productController.getById(+id);
            if (user
                && user.id === listing.fk_user_id
                && listing.status === 'ACTIVE') {
                const cities = await cityController.getAll();
                const categories = await categoryController.getAll();
                const deliveryType = await deliveryTypeController.getAll();

                const context = {
                    listing,
                    cities,
                    categories,
                    deliveryType,
                };

                res.render('products/edit', context);
            } else {
                res.redirect('/publishings');
            }
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

            const newData = [{
                    title: title,
                },
                {
                    desc: desc,
                },
                {
                    price: price,
                },
                {
                    picture: picture,
                },
                {
                    cityId: cityId,
                },
            ];

            try {
                await productController.update(+id, newData);
            } catch (err) {
                console.log('Invalid tokens!');
            }
            res.redirect('/');
        })
        .get('/:id/close', async (req, res) => {
            const user = req.user;
            const {
                id,
            } = req.params;
            const listing = await productController.getById(+id);
            if (user
                && user.id === listing.fk_user_id
                && listing.status === 'ACTIVE') {
                const categories = await categoryController.getAll();
                const context = {
                    categories,
                    listing,
                };

                res.render('products/close', context)
            } else {
                res.redirect('/publishings');
            }
        })
        .post('/:id/close', async (req, res) => {
            const {
                id,
            } = req.params;

            const {
                status,
            } = req.body;

            const newData = [{
                status: status,
            }]
            try {
                await productController.update(+id, newData);
            } catch (err) {
                console.log(err);
            }
            res.redirect('/');
        });

    app.use('/edit', router);
};

module.exports = {
    init,
};