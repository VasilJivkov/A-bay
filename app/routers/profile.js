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
            const loggedUser = req.user;

            if (loggedUser) {
                const user = await userController.getById(+loggedUser.id);
                const cities = await cityController.getAll();
                const categories = await categoryController.getAll();
                const context = {
                    cities,
                    user,
                    categories,
                };
                res.render('profile/edit', context);
            } else {
                res.redirect('/signin');
            }
        })
        .get('/', async (req, res) => {
            const loggedUser = req.user;
            if (loggedUser) {
                const user = await userController.getById(+loggedUser.id);
                const cities = await cityController.getAll();
                const categories = await categoryController.getAll();

                const context = {
                    cities,
                    user,
                    categories,
                };
                res.render('profile/profileDetails', context);
            } else {
                res.redirect('/signin');
            }
        })
        .post('/edit', async (req, res) => {

        });

    app.use('/profile', router);
};

module.exports = {
    init,
};