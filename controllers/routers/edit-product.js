const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            // console.log(req.params);
            const listing = await data.products.getById(+id);
            listing.city = await listing.getCity();
            listing.category = await listing.getCategory();
            listing.deliveryType = await listing.getDeliveryTypes();

            const cities = await data.cities.getAll();
            const categories = await data.categories.getAll();
            const deliveryType = await data.deliveryType.getAll();

            const context = {
                listing,
                cities,
                categories,
                deliveryType,
            };
            // const customID = req.originalUrl.split('/edit/')[1];

            // console.log(req.originalUrl.split('/edit/')[1]);
            res.render('forms/edit-listing', context);
        })
        .post('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            console.log(req.body);
            // const productToUpdate = await data.products.getById(+id);

            // console.log(productToUpdate, '-'.repeat(23));

            // console.log(Object.keys(data.products) + '-'.repeat(30));
            res.redirect('/');
        });

    app.use('/edit', router);
};

module.exports = {
    init,
};
