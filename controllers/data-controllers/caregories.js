const GeneralData = require('./general');

const {
    Categories,
} = require('../../models/models');

class CategoriesData extends GeneralData {
    constructor() {
        super(Categories);
    }
}

module.exports = CategoriesData;
