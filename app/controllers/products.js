const GeneralController = require('./general');

const {
    Products,
} = require('../../models/models');

class ProductsController extends GeneralController {
    constructor() {
        super(Products);
    }

    async getFullInfo(id) {
        const listing = await this.getById(+id);

        listing.id = id;
        listing.city = await listing.getCity();
        listing.category = await listing.getCategory();
        listing.deliveryType = await listing.getDeliveryTypes();

        return listing;
    }
}

module.exports = ProductsController;
