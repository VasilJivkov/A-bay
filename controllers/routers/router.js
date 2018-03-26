const {
    Router,
} = require('express');

// dependency injection
// duck typing
const init = (app) => {
    const router = new Router();
    router
        .get('/', async (req, res) => {
            res.render('/', { name: 'Express' });
        });
    app.use('/routers', router);
};

module.exports = {
    init,
};