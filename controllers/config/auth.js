const config = require('../config');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const passport = require('passport');
const {
    Strategy,
} = require('passport-local');

const init = (app, data) => {
    /** TO DO: implement user auth and roles auth */
};

module.exports = {
    init,
};
