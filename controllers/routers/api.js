const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router
        .post('/chart', async (req, res) => {
            try {
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
                    productsLabels: [
                        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                        'Friday', 'Saturday', 'Sunday',
                    ],
                    productsData: Object.values(daysCount),
                    productsID: '#products-active-days',
                    productsTitle: 'Active days',
                };

                res.status(200).send(context);
            } catch (err) {
                res.satus(500).end();
            }
        });

    app.use('/api', router);
};

module.exports = {
    init,
};
