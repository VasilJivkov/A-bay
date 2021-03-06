/* globals __dirname */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Dependency injection & duck typing
const init = (app) => {
    // Defensive programming
    if (typeof app.use !== 'function' ||
        typeof app.set !== 'function') {
        throw new Error('Invalid app- app.set/use is not a function.');
    }

    // Decorator design pattern
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    // Decorators
    app.use('/static', express.static(path.join(__dirname, '../../public')));
    app.set('views', path.join(__dirname, '../../views'));

    app.use(morgan('combined', {
        skip: (req, res) => res.statusCode > 400,
    }));

    app.set('view engine', 'pug');
};

module.exports = {
    init,
};
