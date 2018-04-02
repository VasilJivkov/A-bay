const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    const ProductController = require('../controllers/product-controller');

    router
        .get('/', async (req, res) => {
            try {
                const productController = new ProductController(data);

                const allProducts = await productController.formatedAPIInfo;

                const context = { keys: allProducts };

                res.send(context);
            } catch (err) {
                res.status(500)
                    .send(err.message); // 'Internal Server Error!'
            }
        })
        .get('/*', async (req, res) => {
            const routeParams = req.params[0].split('/');
            const parametersToFilterBy = [];

            routeParams.forEach((param) => {
                const matched = param.split('=');
                parametersToFilterBy.push(matched);
            });

            const sorted = await Promise.all(parametersToFilterBy.map(async (table, value) => {
                // if (table === 'city') {
                //     productController.filterByCity()

                // }
                // if (table === 'category') { }
                // if (table === 'delivery_type') { }
                const tableObject = await data.table.findOne({
                    where: {
                        name: value,
                    },
                });

                console.log(tableObject);
                return tableObject;
                // const valueID = await tableObject.dataValues.id;

                // return data.products.findAll({
                //     where: {
                //         ['fk_' + table + '_id']: valueID,
                //     },
                // });
            }));

            const context = { routeParams };
            res.send(context);
        });


    app.use('/api/products', router);
};

module.exports = {
    init,
};
