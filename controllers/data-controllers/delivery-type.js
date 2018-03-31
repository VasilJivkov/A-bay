const {
    DeliveryType,
} = require('../../models/models');

class DeliveryTypesData {
    constructor(includes = []) {
        includes = this.includes;
    }

    get all() {
        return DeliveryType.findAll();
    }

    getById(id) {
        return DeliveryType.findById(id);
    }

    async findProductsByDeliveryType(deliveryTypeID) {
        const deliveryType = await DeliveryType.findOne({
            where: {
                id: deliveryTypeID,
            },
        });

        const products = await deliveryType.getProducts();

        return products;
    }
}

module.exports = DeliveryTypesData;
