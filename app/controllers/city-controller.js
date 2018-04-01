class CityController {
    constructor(data) {
        this.data = data;
    }

    get all() {
        return this.data.cities.Model.findAll();
    }

    getById(id) {
        return this.data.cities.Model.findOne({
            where: {
                id: id,
            },
        });
    }
}

module.exports = CityController;
