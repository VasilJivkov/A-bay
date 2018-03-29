const express = require('express');

const config = require('./config');

const customExpress = require('./config/express');
const routers = require('./routers');
const data = require('../controllers/data');
const auth = require('./config/auth');
const app = express();

customExpress.init(app);
auth.init(app, data);

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    return next();
});

routers.init(app, data);

app.listen(config.port);
