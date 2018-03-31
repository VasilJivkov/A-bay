const {
    Router,
} = require('express');

const {
    UserController,
    CityController,
    CategoryController,
} = require('../controllers');

const init = (app, data) => {
    const router = new Router();

    const userController = new UserController(data);
    const cityController = new CityController(data);
    const categoryController = new CategoryController(data);

    router
        .get('/edit', async (req, res) => {
            const users = await userController.getAll();
            const cities = await cityController.getAll();
            const categories = await categoryController.getAll();
            const context = {
                cities,
                users,
                categories,
            };
            res.render('profile/edit', context);
        })
        .post('/edit', async (req, res) => {

        });

    app.use('/', router);
};

module.exports = {
    init,
};
