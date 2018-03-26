const express = require('express');

const config = require('./config');

const customExpress = require('./config/express');
const routers = require('./routers');

const app = express();

customExpress.init(app);
routers.init(app, {});

/** TO DO add middleware */
// app.use((req, res, next) => {
// });

/** TO DO complete the dependency injection */

app.listen(config.port);
