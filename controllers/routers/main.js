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
            const categories = await categoryController.getAll();
            const context = {
                categories,
            };

            res.render('forms/signin', context);
        })
        .get('/listings', async (req, res) => {
            const cities = await cityController.getAll();
            const categories = await categoryController.getAll();
            const users = await userController.getAll();

            const listings = [{
                title: 'ThinkPad T55',
                price: 300 + 'lv',
                picture: 'https://smartphone.bg/system/images/151631/normal/MQAC2GHA.jpg',
            }, {
                title: 'ThinkPad T55',
                price: 300 + 'lv',
                picture: 'https://smartphone.bg/system/images/151631/normal/MQAC2GHA.jpg',
            }, {
                title: 'ThinkPad T55',
                price: 300 + 'lv',
                picture: 'https://smartphone.bg/system/images/151631/normal/MQAC2GHA.jpg',
            }];

            const content = {
                listings,
                cities,
                users,
                categories,
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

                (await data.products.getAllCreatedAdDates())
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

                res.status(200).send(context);
            } catch (err) {
                res.satus(500).end();
            }
        });

    app.use('/', router);
};

module.exports = {
    init,
};
