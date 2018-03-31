const GeneralData = require('./general');
const {
    Categories,
} = require('../../models');

class CategoriesData extends GeneralData {
    constructor() {
        super(Categories);
    }
}

module.exports = CategoriesData;
