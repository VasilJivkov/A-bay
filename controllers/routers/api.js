const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/api/products', async (req, res) => {
            try {
                const allProducts = await data.products.getAll();
                allProducts = await allProducts.dataValues;
                const context = await { allProducts };
                console.log(context);

                res.send(context);
            } catch (err) {
                res.status(500).send({ title: 'Internal Server Error!' });
            }
        });


    app.use('/', router);
};

module.exports = {
    init,
};
