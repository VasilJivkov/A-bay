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
