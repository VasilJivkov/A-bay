const {
    Router,
} = require('express');


const init = (app, data) => {
    const router = new Router();

    router.get('/edit', async (req, res) => {
        const users = await data.users.getAll();
        const cities = await data.cities.getAll();
        const context = {
            users,
            cities,
        };
        res.render('forms/edit', context);
    });

    router.post('/edit', async (req, res) => {

    });

    app.use('/', router);
};

module.exports = {
    init,
};