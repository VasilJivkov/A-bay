const express = require('express');

const config = require('./config');
const flash = require('express-flash');
const customExpress = require('./config/express');
const auth = require('./config/auth');
const validator = require('express-validator');
const routers = require('./routers');
const data = require('../app/data');

const app = express();

customExpress.init(app);
auth.init(app, data);


// Express Validator
app.use(validator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.user = req.user || null;
    next();
});

routers.init(app, data);

app.listen(config.port);
