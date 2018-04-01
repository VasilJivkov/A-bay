const {
    Router,
} = require('express');

const {
    ProductController,
    CityController,
    CategoryController,
    UserController,
} = require('../controllers');

const init = (app, data) => {
    const router = new Router();

    const productController = new ProductController(data);
    const cityController = new CityController(data);
    const categoryController = new CategoryController(data);
    const userController = new UserController(data);

    router
        .get('/signin', async (req, res) => {
            const categories = await categoryController.all;

            const context = {
                categories,
            };

            res.render('forms/signin', context);
        })
        .get('/publishings', async (req, res) => {
            const cities = await cityController.all;
            const categories = await categoryController.all;
            const users = await userController.all;

            let publishings = await productController.all;

            publishings = Promise.all(
                publishings.map(async (publish) => {
                    return publish.dataValues;
                })
            );

            const allPublishings = await publishings;

            const content = {
                allPublishings,
                users,
                categories,
                cities,
            };

            res.render('products/list-all', content);
        })
        .get('/categories', (req, res) => {
            res.render('products/categories');
        })
        .get('/chart', async (req, res) => {
            try {
                const daysCount = {
                    'mon': 0,
                    'tue': 0,
                    'wed': 0,
                    'thu': 0,
                    'fri': 0,
                    'sat': 0,
                    'sun': 0,
                };

                (await productController.getAllCreatedAdDates())
                    .forEach((day) => {
                        daysCount[day] += 1;
                    });

                const context = {
                    productsLabels: [
                        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                        'Friday', 'Saturday', 'Sunday',
                    ],
                    productsData: Object.values(daysCount),
                    productsID: '#products-active-days',
                    productsTitle: 'Active days',
                };

                res.render('index', context);
            } catch (err) {
                res.render('/');
            }
        });

    app.use('/', router);
};

module.exports = {
    init,
};
