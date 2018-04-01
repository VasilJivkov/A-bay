const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    const ProductController = require('../controllers/product-controller');

    router
        .get('/products', async (req, res) => {
            // try {
            const productController = new ProductController(data);

            const allProducts = await productController.formatedAPIInfo;

            const context = { allProducts };

            res.send(context);
            // } catch (err) {
            //     res.status(500)
            // .send(err.message); // 'Internal Server Error!'
            // }
        });


    app.use('/api', router);
};

module.exports = {
    init,
};
