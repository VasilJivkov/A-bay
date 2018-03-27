const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router.get('/', (req, res) => {
        console.log('Routes!!!');

        res.render('_shared/master');
    });

    router.get('/signin', (req, res) => {
        res.render('forms/signin');
    });

    router.get('/adds', (req, res) => {
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
        };

        res.render('products/list', content);
    });

    router.get('/categories', (req, res) => {
        res.render('products/categories');
    });

    app.use('/', router);
};

module.exports = {
    init,
};
