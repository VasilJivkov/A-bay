/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');
const {
    CategoryController,
} = require('../controllers');

const init = (app, data) => {
    const categoryController = new CategoryController(data);

    app.get('/', async (req, res) => {
        const categories = await categoryController.getAll();
        const context = {
            categories,
        };

        res.render('index', context);
    });

    // Dynamically load all routes
    fs.readdirSync(__dirname)
        .filter((filename) => filename !== path.basename(__filename))
        .filter((filename) => filename !== 'index.js')
        // relative -> absolute path
        .map((filename) => path.join(__dirname, filename))
        .forEach((modulePath) => {
            const route = require(modulePath);
            route.init(app, data);
        });
};

module.exports = {
    init,
};
