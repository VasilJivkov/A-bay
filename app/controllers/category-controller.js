class CategoryController {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        const categories = this.data.categories.getAll();
        return categories;
    }

    getById(id) {
        const category = this.data.categories.getById(id);
        return category;
    }
}
module.exports = CategoryController;
