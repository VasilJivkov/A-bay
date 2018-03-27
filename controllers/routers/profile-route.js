const {
    Router,
} = require('express');


const init = (app, data) => {
    const router = new Router();

    router.get('/edit', async (req, res) => {
        const users = await data.users.getAll();
        const context = {
            users,
        };
        res.render('forms/edit', context);
    });

    app.use('/', router);
};

module.exports = {
    init,
};