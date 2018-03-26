const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router.get('/', (req, res) => {
        console.log('Routes!!!');

        res.render('_shared/master');
    });

    app.use('/', router);
};

module.exports = {
    init,
};
