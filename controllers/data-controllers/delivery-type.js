const {
    DeliveryType,
} = require('../../models');

class DeliveryTypesData {
    constructor(includes = []) {
        includes = this.includes;
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
