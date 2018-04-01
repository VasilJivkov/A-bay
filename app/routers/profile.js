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
            const users = await userController.all;
            const cities = await cityController.all;
            const categories = await categoryController.all;
            const context = {
                cities,
                users,
                categories,
            };
            res.render('profile/edit', context);
        })
        .get('/profile', async (req, res) => {
            const {
                id,
            } = req.params;

            const user = await userController.getById(+id);
            const cities = await cityController.all;
            const categories = await categoryController.all;

            const context = {
                cities,
                user,
                categories,
            };
            res.render('profile/userDetails', context);
        })
        .post('/edit', async (req, res) => {

        });

    app.use('/', router);
};

module.exports = {
    init,
};
