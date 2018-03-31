class ProductController {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        const products = this.data.products.getAll();
        return products;
    }

    async getById(id) {
        const product = await this.data.products.getById(+id);
        product.city = await product.getCity();
        product.category = await product.getCategory();
        product.deliveryType = await product.getDeliveryTypes();

        return product;
    }

    async create(productModel, userId) {
        productModel.price = +productModel.price;
        productModel.fk_city_id = +productModel.cityId;
        productModel.fk_category_id = +productModel.categoryId;
        productModel.fk_user_id = +userId;
        productModel.status = 'ACTIVE';

        const deliveryIds = Array.isArray(productModel.deliveryTypeId) ?
            productModel.deliveryTypeId :
            [productModel.deliveryTypeId];

        const deliveryTypes = await Promise.all(
            deliveryIds.map((id) => {
                return this.data.deliveryType.getById(+id);
            }));

        const product = await this.data.products.create(productModel);
        await product.setDeliveryTypes(deliveryTypes);
    }

    update(id, data) {
        this.data.products.update(id, data);
    }

    filterByCity(cityId) {
        return this.data.products.filterByCity(cityId);
    }

    filterByCategory(catId) {
        return this.data.products.filterByCategory(catId);
    }

    filterByUser(userId) {
        return this.data.products.filterByUser(userId);
    }

    orderBy(column, parameter) {
        return this.data.products.orderBy(column, parameter);
    }

    searchBy(category, parameter) {
        return this.data.products.searchBy(category, parameter);
    }

    getAllCreatedAdDates() {
        return this.data.products.getAllCreatedAdDates();
    }
}
module.exports = ProductController;
