const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/signin', async (req, res) => {
            const categories = await data.categories.getAll();
            const context = {
                categories,
            };

            res.render('forms/signin', context);
        })
        .get('/adds', async (req, res) => {
            const cities = await data.cities.getAll();
            const categories = await data.categories.getAll();
            const users = await data.users.getAll();

            const adds = [{
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
                adds,
                cities,
                users,
                categories,
            };

            res.render('products/list', content);
        })
        .get('/categories', (req, res) => {
            res.render('products/categories');
        })
        .post('/api/chart', async (req, res) => {
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
