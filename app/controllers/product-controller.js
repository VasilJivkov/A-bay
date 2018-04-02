class ProductController {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        const products = this.data.products.getAll();
        return products;
    }

    async getById(id) {
        const product = await this.data.products.getById(id);

        product.id = id;
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
            productModel.deliveryTypeId : [productModel.deliveryTypeId];

        const deliveryTypes = await Promise.all(
            deliveryIds.map((id) => {
                return this.data.deliveryType.getById(+id);
            }));

        const product = await this.data.products.create(productModel);
        await product.setDeliveryTypes(deliveryTypes);
    }

    update([id, data]) {
        this.data.products.update([id, data]);
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

    get formatedAPIInfo() {
        const formatedInfo = (async () => {
            const allProducts = await this.data.products.getAll();
            const apiInfo = [];

            await Promise.all(
                allProducts.map(async (product) => {
                    try {
                        const formatedProduct = {
                            id: product.dataValues.id,
                            title: product.dataValues.title,
                            desc: product.dataValues.desc,
                            price: product.dataValues.price,
                            picture: product.dataValues.picture,
                            status: product.dataValues.status,
                            createdAt: product.dataValues.createdAt,
                            updatedAt: product.dataValues.updatedAt,
                        };

                        const city = await this.data.cities
                            .getById(+product.dataValues.fk_city_id);

                        const category = await this.data.categories
                            .getById(+product.dataValues.fk_category_id);

                        formatedProduct.city = await city.dataValues.name;
                        formatedProduct.category =
                            await category.dataValues.name;

                        const delType =
                            await product.getDeliveryTypes();

                        formatedProduct.deliveryType =
                            await delType[0].dataValues.name;

                        apiInfo.push(formatedProduct);
                    } catch (err) {
                        console.log('Server error!');
                    }
                })
            );

            return apiInfo;
        })();

        return formatedInfo;
    }
}
module.exports = ProductController;
