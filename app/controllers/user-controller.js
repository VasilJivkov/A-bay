class UserController {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        const users = this.data.users.getAll();
        return users;
    }

    getById(id) {
        const user = this.data.users.getById(id);
        return user;
    }

    create(newUser) {
        const user = this.data.users.create(newUser);
        return user;
    }

    findByUsername(username) {
        const user = this.data.users.findByUsername(username);
        return user;
    }

    update(id, data) {
        this.data.products.update(id, data);
    }

    async getAllCreatedAdDates() {
        return await this.data.users.getAllCreatedAdDates();
    }
}

module.exports = UserController;
