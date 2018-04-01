class DeliveryTypeController {
    constructor(data) {
        this.data = data;
    }

    get all() {
        return this.data.deliveryType.Model.findAll();
    }

    getById(id) {
        return this.data.deliveryType.Model.findOne({
            where: {
                id: id,
            },
        });
    }
}

module.exports = DeliveryTypeController;
