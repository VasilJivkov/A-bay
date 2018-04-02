class ProductController {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        const products = this.data.products.getAll();
        return products;
    }

    async getChartsInfo() {
        const barData = await (async () => {
            const daysCount = {
                'mon': 0,
                'tue': 0,
                'wed': 0,
                'thu': 0,
                'fri': 0,
                'sat': 0,
                'sun': 0,
            };

            (await this.data.products.getAllCreatedAdDates())
                .forEach((day) => {
                    daysCount[day] += 1;
                });

            const context = {
                labels: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                    'Friday', 'Saturday', 'Sunday',
                ],
                data: Object.values(daysCount),
                id: '#products-active-days',
                title: 'Active days',
            };

            return context;
        })();

        const pieData = await (async () => {
            let products = await this.data.products.getAll();
            products = await Promise.all(
                products.map(async (product) => {
                    return product.dataValues.fk_category_id;
                })
            );

            const categories = {};
            const categoriesForPie = [];

            let categoriesData = await this.data.categories.getAll();

            categoriesData = await Promise.all(
                categoriesData.map(async (category) => {
                    categoriesForPie.push(category.dataValues.name);
                    categories[category.dataValues.id] = {
                        id: category.dataValues.name,
                        product: [],
                    };

                    return;
                })
            );

            const dataPerCategory = Array.from({
                length: Object.keys(categoriesData).length,
            }).fill(0);

            products.forEach((product) => {
                dataPerCategory[+product - 1] += 1;
            });

            const context = {
                labels: categoriesForPie,
                data: dataPerCategory,
                id: '#pie',
                title: 'MOST POPULAR CATEGORIES',
            };

            return context;
        })();

        const context = {
            barData,
            pieData,
        };

        return context;
    }

    async getById(id) {
        const product = await this.data.products.getById(id);

        product.id = id;
        product.city = await product.getCity();
        product.category = await product.getCategory();
        product.deliveryType = await product.getDeliveryTypes();

        return product;
    }

    async getFormatedDataForListing() {
        let publishings = await this.data.products.getAll();

        publishings = Promise.all(
            publishings.map(async (publish) => {
                return publish.dataValues;
            })
        );

        return publishings;
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
