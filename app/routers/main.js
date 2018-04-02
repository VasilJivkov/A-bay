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
        .get('/signin', async (req, res) => {
            const categories = await categoryController.all;

            const context = {
                categories,
            };

            res.render('forms/signin', context);
        })
        .get('/publishings', async (req, res) => {
            const cities = await cityController.all;
            const categories = await categoryController.all;
            const users = await userController.all;

            let publishings = await productController.all;

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
                const barData = await (async () => {
                    const daysCount = {
                        'mon': 0,
                        'tue': 0,
                        'wed': 0,
                        'thu': 0,
                        'fri': 0,
                        'sat': 0,
                        'sun': 0,
                    };

                    (await data.products.getAllCreatedAdDates())
                        .forEach((day) => {
                            daysCount[day] += 1;
                        });

                    const context = {
                        labels: [
                            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                            'Friday', 'Saturday', 'Sunday',
                        ],
                        data: Object.values(daysCount),
                        id: '#products-active-days',
                        title: 'Active days',
                    };

                    return context;
                })();

                const pieData = await (async () => {
                    let products = await productController.all;
                    products = await Promise.all(
                        products.map(async (product) => {
                            return product.dataValues.fk_category_id;
                        })
                    );

                    const categories = {};
                    const categoriesForPie = [];

                    let categoriesData = await categoryController.all;

                    categoriesData = await Promise.all(
                        categoriesData.map(async (category) => {
                            categoriesForPie.push(category.dataValues.name);
                            categories[category.dataValues.id] = {
                                id: category.dataValues.name,
                                product: [],
                            };

                            return;
                        })
                    );

                    const dataPerCategory = Array.from({ length: Object.keys(categoriesData).length }).fill(0);

                    products.forEach((product) => {
                        dataPerCategory[+product - 1] += 1;
                    });

                    const context = {
                        labels: categoriesForPie,
                        data: dataPerCategory,
                        id: '#pie',
                        title: 'MOST POPULAR CATEGORIES',
                    };

                    return context;
                })();

                const context = {
                    barData,
                    pieData,
                };

                res.status(200).send(context);
            } catch (err) {
                res.satus(500).end();
            }
        });

    app.use('/', router);
};

module.exports = {
    init,
};
