const {
    Router,
} = require('express');

const {
    ProductController,
    CityController,
    CategoryController,
    UserController,
} = require('../controllers');

const init = (app, data) => {
    const router = new Router();

    const productController = new ProductController(data);
    const cityController = new CityController(data);
    const categoryController = new CategoryController(data);
    const userController = new UserController(data);

    router
        .get('/', async (req, res) => {
            const latestProducts = (async (type) => {
                let allPublishings =
                    await productController.getFormatedDataForListing();

                allPublishings = (await allPublishings).slice(0, 10);

                const content = {
                    allPublishings,
                };

                console.log(allPublishings);
                return content;
            })();

            res.render('products/latest', latestProducts);
        })
        .get('/signin', async (req, res) => {
            const categories = await categoryController.getAll();
            console.log(categories);
            const context = {
                categories,
            };

            res.render('forms/signin', context);
        })
        .get('/publishings', async (req, res) => {
            const cities = await cityController.getAll();
            const categories = await categoryController.getAll();
            const users = await userController.getAll();

            let publishings = await productController.getAll();

            publishings = Promise.all(
                publishings.map(async (publish) => {
                    return publish.dataValues;
                })
            );

            const allPublishings = await publishings;

            const content = {
                allPublishings,
                users,
                categories,
                cities,
            };

            res.render('products/list-all', content);
        })
        .get('/categories', (req, res) => {
            res.render('products/categories');
        })
        .get('/chart', async (req, res) => {
            try {
                const context = await productController.getChartsInfo();
                res.send(context);
            } catch (err) {
                res.satus(500).end();
            }
        });

    app.use('/', router);
};

module.exports = {
    init,
};
