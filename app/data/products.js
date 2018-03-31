const GeneralData = require('./general');

const {
    Products,
} = require('../../models/models');

class ProductsData extends GeneralData {
    constructor() {
        super(Products);
    }

    get all() {
        return this.getAll();
    }

    get datesOfCreation() {
        return this.getAllCreatedAdDates();
    }

    /**
     * @param object new model
     */

    createProduct(obj) {
        return this.create(obj);
    }

    /**
       * @description Expects array with objects
       * with arttribute and value to update
       * @param Array with [id, data]
       * @param id number
       * @param data array form objects with arttribute and value to update
       * @return Returns db object with id = id parameter.
       */

    updateProduct([ id, obj]) {
        return this.update(id, obj);
    }

    /**
     * @description Filter method,
     * which returns all products of a specified user.
     * @param id number
     * @return returns array with matching rows form this.Model.
     */

    filterByUser(id) {
        return this.filterConstructor({
            fk_user_id: id,
        });
    }
}

module.exports = ProductsData;
