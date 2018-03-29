const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            console.log('Routes!!!');

            res.render('_shared/master');

        })
        .get('/signin', async (req, res) => {
            const categories = await data.categories.getAll();
            const context = {
                categories,
            };

            res.render('forms/signin' , context);

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
                categories
            };

            res.render('products/list', content);
        })
        .get('/categories', (req, res) => {
            res.render('products/categories');
        });

    app.use('/', router);
};

module.exports = {
    init,
};
