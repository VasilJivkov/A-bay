class DeliveryTypeController {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        const deliveryTypes = this.data.deliveryType.getAll();
        return deliveryTypes;
    }

    getById(id) {
        const deliveryType = this.data.deliveryType.getById(id);
        return deliveryType;
    }
}
    module.exports = DeliveryTypeController;
