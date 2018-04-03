class Data {
    constructor(Model, includes = []) {
        this.Model = Model;
        this.includes = includes;
    }

    /**
     * @description Gets all entries from specified DB table
     * @return {Object} All rows from the given DB table
     */

    getAll() {
        return this.Model.findAll();
    }

    /**
     * @description Get row from table by given id.
     * @param id number
     * @return Returns element with the id parameter.
     */

    getById(id) {
        return this.Model.findById(id, {
            include: this.includes,
        });
    }

    /**
     * @description Create new object in the database
     * @param dataObj object
     * @return Returns the created element.
     */

    create(obj) {
        const userObj = this.Model.create({
            username: obj.username,
            email: obj.email,
            password: obj.password,
        });

        return this.Model.create(obj);
    }
    /**
     * @description Get a row from table by given id.
     * @param id number
     * @param data array form objects with arttribute and value to update
     * @return Returns db object with id = id parameter.
     */

    update(id, data) {
        const dBTableUpdate = (key, value) => {
            this.Model.update({
                [key]: value,
            }, {
                where: {
                    id: id,
                },
            }, ).success(() => {}).error(() => {
                console.log('Invalid tokens!');
            });
        };

        data.forEach((dataRowToUpdate) => {
            const attr = Object.keys(dataRowToUpdate)[0];
            const value = dataRowToUpdate[attr];

            dBTableUpdate(attr, value);
        });
    }
    /**
     * @description Gets all of the CreatedAt values of this.Model
     * @async
     * @param no params
     * @return Returns array with all of the CreatedAt values of this.Model
     */

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
