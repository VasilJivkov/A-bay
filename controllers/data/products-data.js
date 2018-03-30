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

    filterByCity(id) {
        const products = this.filterConstructor({
            fk_city_id: id,
        });

        return products;
    }

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

    orderBy(column, parameter) {
        const orderedProducts = this.Model.findAll({
            order: [
                [column, parameter],
            ],
        });

        return orderedProducts;
    }

    searchBy(category, parameter) {
        const products = this.Model.findAll({
            where: {
                category: parameter,
            },
        });

        return products;
    }

    update(id, data) {
        const dBTableUpdate = (key, value) => {
            this.Model.update({
                [key]: value,
            }, {
                    where: { id: id },
                },
            )
                .success(() => {
                    console.log('Valid tokens!');
                })
                .error(() => {
                    console.log('Invalid tokens!');
                });
        };

        data.forEach((dataRowToUpdate) => {
            const attr = Object.keys(dataRowToUpdate)[0];
            const value = dataRowToUpdate[attr];

            dBTableUpdate(attr, value);
        });
    }
}


module.exports = ProductsData;
