class CategoryController {
    constructor(data) {
        this.data = data;
    }

    get all() {
        return this.data.categories.Model.findAll();
    }

    getById(id) {
        return this.data.categories.Model.findOne({
            where: {
                id: id,
            },
        });
    }
}

module.exports = CategoryController;
