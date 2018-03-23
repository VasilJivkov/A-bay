const express = require('express');

const app = express();

require('./config/express').init(app);

/** TO DO add middleware */
app.use((req, res, next) => {
});

/** TO DO complete the dependency injection */
require('./config/').init(app);

app.listen(3003);
