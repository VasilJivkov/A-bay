class CityController {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        const cities = this.data.cities.getAll();
        return cities;
    }

    getById(id) {
        const city = this.data.cities.getById(id);
        return city;
    }
}
    module.exports = CityController;
