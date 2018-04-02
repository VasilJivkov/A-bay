const Data = require('./generic-data');
const {
    Products,
} = require('../../models/models');

class ProductsData extends Data {
    constructor() {
        super(Products, []);
    }

    filterConstructor(filterObj) {
        return this.Model.findAll({
            where: filterObj,
        });
    }

    /**
     * @description Filter method, which filters by city.
     * @param id number
     * @return returns array with matching rows form this.Model.
     */

    filterByCity(id) {
        const products = this.filterConstructor({
            fk_city_id: id,
        });

        return products;
    }

    /**
     * @description Filter method, which filters by category.
     * @param id number
     * @return returns array with matching rows form this.Model.
     */

    filterByCategory(id) {
        const products = this.filterConstructor({
            fk_category_id: id,
        });

        return products;
    }

    filterByUser(id) {
        const products = this.filterConstructor({
            fk_user_id: id,
        });

        return products;
    }

    /**
     * @description Order by given column and value.
     * @param column string
     * @param parameter string
     * @return Returns ordered Model.
     */

    orderBy(column, parameter) {
        const orderedProducts = this.Model.findAll({
            order: [
                [column, parameter],
            ],
        });

        return orderedProducts;
    }
    /**
      * @description Search by given column and value.
      * @param category string,
      * @param parameter string,
      * @return Returns array with all of the data from this.Model
      *  where category&&parameter matches something
      */

    searchBy(category, parameter) {
        const products = this.Model.findAll({
            where: {
                category: parameter,
            },
        });

        return products;
    }
}


module.exports = ProductsData;
