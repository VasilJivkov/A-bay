class GeneralController {
    constructor(Model) {
        this.Model = Model;
    }

    /**
    * @description Get a row from table by given id.
    * @param id number
    * @param data array form objects with arttribute and value to update
    * @return Returns db object with id = id parameter.
    */

    update([id, data]) {
        const dBTableUpdate = (key, value) => {
            this.Model.update({
                [key]: value,
            }, {
                    where: { id: id },
                },
            ).success(() => {
            }).error(() => {
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

module.exports = GeneralController;
