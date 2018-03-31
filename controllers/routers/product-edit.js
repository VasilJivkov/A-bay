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

            const listing = await data.products.getById(+id);
            listing.city = await listing.getCity();
            listing.category = await listing.getCategory();
            listing.deliveryType = await listing.getDeliveryTypes();

            const cities = await data.cities.getAll();
            const categories = await data.categories.getAll();
            const deliveryType = await data.getAll();

            const context = {
                listing,
                cities,
                categories,
                deliveryType,
            };

            res.render('products/edit', context);
        })
        .post('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const {
                title,
                desc,
                price,
                picture,
                cityId,
            } = req.body;

            const newData = [
                { title: title },
                { desc: desc },
                { price: price },
                { picture: picture },
                { cityId: cityId },
            ];

            try {
                await data.products.update(+id, newData);
            } catch (err) {
                console.log('Invalid tokens!');
            }
            res.redirect('/');
        });

    app.use('/edit', router);
};

module.exports = {
    init,
};
