const GeneralController = require('./_general');

class UserController extends GeneralController {
    constructor(data) {
        super();
        this.data = data;
    }

    get all() {
        return this.data.cities.Model.findAll();
    }

    getById(id) {
        return this.data.cities.Model.findOne({
            where: {
                id: id,
            },
        });
    }

    set create(newUser) {
        return this.data.users.create(newUser);
    }

    findByUsername(username) {
        return this.data.users.findByUsername(username);
    }
}

module.exports = UserController;
