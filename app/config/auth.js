const config = require('../config');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const passport = require('passport');
const {
    Strategy,
} = require('passport-local');

const {
    UserController,
} = require('../controllers')
const init = (app, data) => {

    const userController = new UserController(data);

    passport.use(new Strategy(async (username, password, done) => {
        const user = await userController.findByUsername(username);

        if (!user || user.password !== password) {
            return done(null, false, {
                message: 'Incorrect username or password.',
            });
        }

        // User exists
        return done(null, user);
    }));

    // User to string
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    // string to User
    passport.deserializeUser(async (username, done) => {
        const user = await userController.findByUsername(username);

        if (!user) {
            return done(new Error('invalid used'));
        }

        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({
        secret: config.secret,
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = {
    init,
};