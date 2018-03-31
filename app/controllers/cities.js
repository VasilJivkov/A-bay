const GeneralController = require('./general');

const {
    City,
} = require('../../models/models');

class CitiesConstructor extends GeneralController {
    constructor() {
        super(City);
    }
}

module.exports = CitiesConstructor;
