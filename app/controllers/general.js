class GeneralController {
    constructor(Model) {
        this.Model = Model;
    }

    get all() {
        return this.Model.findAll();
    }

    getById(id) {
        return this.Model.findOne({
            where: {
                id: id,
            },
        });
    }
}

module.exports = GeneralController;
