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
        res.render('forms/singin');
    });


    app.use('/', router);
    app.use('/singin', router);
};

module.exports = {
    init,
};
