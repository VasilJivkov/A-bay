const GeneralData = require('./general');

const {
    City,
} = require('../../models/models');

class CititesData extends GeneralData {
    constructor() {
        super(City);
    }
}

module.exports = CititesData;
