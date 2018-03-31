class GeneralData {
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

    /**
      * @description Constructor for Sequelize queries for filter.
      * @param object to filter by
      * @return Returns array with matching rows form this.Model.
      */

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
        return this.filterConstructor({
            fk_city_id: id,
        });
    }

    /**
      * @description Filter method, which filters by category.
      * @param id number
      * @return returns array with matching rows form this.Model.
      */

    filterByCategory(id) {
        return this.filterConstructor({
            fk_category_id: id,
        });
    }

    /**
      * @description Order by given column and value.
      * @param column string
      * @param parameter string
      * @return Returns ordered Model.
      */

    orderBy(column, parameter) {
        return this.Model.findAll({
            order: [
                [column, parameter],
            ],
        });
    }

    /**
      * @description Search by given column and value.
      * @param category string,
      * @param parameter string,
      * @return Returns array with all of the data from this.Model
      *  where category&&parameter matches something
      */

    searchBy(catecogy, parameter) {
        return this.Model.findAll({
            where: {
                category: parameter,
            },
        });
    }

    /**
      * @description Gets all of the CreatedAt values of this.Model
      * @async
      * @param no params
      * @return Returns array with all of the CreatedAt values of this.Model
      */

    async getAllCreatedAdDates() {
        const modelProp = await this.getAll();

        const allDates = await Promise.all(
            await modelProp.map((user) => {
                return this.model.dataValues.createdAt;
            })
        );

        return Object.values(allDates)
            .map((d) => {
                return (d + '').split(' ')[0].toLowerCase();
            });
    }
}

module.exports = GeneralData;
