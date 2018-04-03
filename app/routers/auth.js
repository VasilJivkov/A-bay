const {
    Router,
} = require('express');

const passport = require('passport');
const validator = require('express-validator');

const {
    CategoryController,
    UserController,
} = require('../controllers');

const init = (app, data) => {
    const router = new Router();
    const categoryController = new CategoryController(data);
    const userController = new UserController(data);

    router
        .get('/login', async (req, res) => {
            const categories = await categoryController.getAll();
            req.flash('info', 'Ivalid Credentials, try again');
            const context = {
                categories,
                messages: req.flash('info'),
            };
            res.render('forms/signin', context);
        })

        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: true,
            })
        )

        .get('/logout', (req, res) => {
            req.logout();
            res.redirect('/publishings');
        })


        .post('/register', (req, res) => {

        const registerForm = req.body;
        const username = registerForm.username;
        const email = registerForm.username;
        const password = registerForm.password;
        const password2 = registerForm.confirm_password;

        // //validation
        // req.checkBody('username' , 'Name is required').nonEmpty();
        // req.checkBody('email' , 'Email is required').nonEmpty().isEmail();
        // req.checkBody('password' , 'Password is required').nonEmpty();
        // req.checkBody('password2' , 'Password is requred').nonEmpty();

        userController.create(req.body);
            return res.redirect('/login');
        });

        // .post('/register', async (req, res) => {
        //         try {
        //             const registerForm = req.body;
        //
        //             //validation
        //             req.checkBody('name' , 'Name is required').nonEmpty();
        //
        //             await productController.create(productModel, userId);
        //             res.redirect('/profile');
        //         } catch (err) {
        //             console.log(err);
        //             res.redirect('/login' , {
        //                 errors:errors
        //             });
        //         }
        //     }

        app.use('/', router);

};

module.exports = {
    init,
};
