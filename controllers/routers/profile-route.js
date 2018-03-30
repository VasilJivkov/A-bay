const {
    Router,
} = require('express');


const init = (app, data) => {
    const router = new Router();

    router
        .get('/edit', async (req, res) => {
            const users = await data.users.getAll();
            const cities = await data.cities.getAll();
            const categories = await data.categories.getAll();
            const context = {
                cities,
                users,
                categories,
            };
            res.render('forms/edit', context);
        })
        .post('/edit', async (req, res) => {

        });

    app.use('/', router);
};

module.exports = {
    init,
};