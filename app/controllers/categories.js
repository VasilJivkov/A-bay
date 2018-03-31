const GeneralController = require('./general');

const {
    Categories,
} = require('../../models/models');

class CategoriesConstructor extends GeneralController {
    constructor() {
        super(Categories);
    }
}

module.exports = CategoriesConstructor;
