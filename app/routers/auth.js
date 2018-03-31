const {
    Router,
} = require('express');

const passport = require('passport');

const {
    CategoryController,
} = require('../controllers');

const init = (app, data) => {
    const router = new Router();

    const categoryController = new CategoryController(data);

    router
        .get('/login', async (req, res) => {
            const categories = await categoryController.getAll();
            const context = {
                categories,
            };

            res.render('forms/signin', context);
        })
        .post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: false,
        })
    );
};

module.exports = {
    init,
};
