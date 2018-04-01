const GeneralController = require('./_general');

class ProductController extends GeneralController {
    constructor(data) {
        super();
        this.data = data;
        this.ProductsModel = this.data.products.Model;
        this.CategoriesModel = this.data.categories.Model;
        this.CitiesModel = this.data.cities.Model;
    }

    get all() {
        return this.ProductsModel.findAll();
    }

    getById(id) {
        return this.ProductsModel.findOne({
            where: {
                id: id,
            },
        });
    }

    get formatedAPIInfo() {
        const formatedInfo = (async () => {
            const allProducts = await this.ProductsModel.findAll();
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

                        const city = await this.CitiesModel.findOne({
                            where: {
                                id: product.dataValues.fk_city_id,
                            },
                        });

                        const category = await this.CategoriesModel.findOne({
                            where: {
                                id: product.dataValues.fk_category_id,
                            },
                        });

                        formatedProduct.city = await city.dataValues.name;
                        formatedProduct.category = await category.dataValues.name;


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

    async getFullInfo(id) {
        const listing = await this.data.products.getById(+id);

        listing.id = id;
        listing.city = await listing.getCity();
        listing.category = await listing.getCategory();
        listing.deliveryType = await listing.getDeliveryTypes();

        return listing;
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

    async getAllCreatedAdDates() {
        return this.data.products.getAllCreatedAdDates();
    }
}

module.exports = ProductController;
