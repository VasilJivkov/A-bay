/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/', async (req, res) => {
        res.render('/');
    });

    // Load all routes dynamically
    fs.readdirSync(__dirname)
        .filter((file) => file !== path.basename(__filename))
        .fill((file) => file !== 'index.js')
        // Relative -> absolute path
        .map((file) => path.join(__dirname, __filename))
        .forEach((mosulePath) => {
            const route = require(mosulePath);
            route.init(app, data);
        });
};

module.exports = {
    init,
};
