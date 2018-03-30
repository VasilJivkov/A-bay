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

    update(id, data) {
        const DBTableUpdate = (key, value) => {  
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

            DBTableUpdate(attr, value);
        });
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

    findByUsername(username) {
        return this.Model.findOne({
            where: {
                username,
            },
        });
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
