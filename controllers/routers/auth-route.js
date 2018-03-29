const passport = require('passport');


const init= (app) => {

    app.get('/login', async (req,res) => {
        const categories = await data.categories.getAll();
        const context = {
            categories,
        };

        res.render('forms/signin' , context);
    });

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: false })
    );
};

module.exports = {
    init,
};