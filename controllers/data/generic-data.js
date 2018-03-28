class Data {
    constructor(Model, includes = []) {
        this.Model = Model;
        this.includes = includes;
    }

    getAll() {
        return this.Model.findAll();
    }

    getById(id) {
        return this.Model.findById(id, {
            include: this.includes,
        });
    }

    create(obj) {
       return this.Model.create(obj);
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

    searchBy(catecogy, parameter) {
        const products = this.Model.findAll({
            where: {
                catecogy: parameter,
            },
        });

        return products;
    }

    async getAllCreatedAdDates() {
        const users = await this.getAll();

        const allDates = await Promise.all(
            await users.map(async (user) => {
                const dates = await user.dataValues.createdAt;

                return dates;
            })
        );

        return Object.values(allDates)
            .map((d) => {
                const day = (d + '').split(' ')[0].toLowerCase();
                return day;
            });
    }
}

module.exports = Data;
