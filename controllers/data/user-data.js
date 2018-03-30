const Data = require('./generic-data');
const {
    Users,
} = require('../../models/models');


class UsersData extends Data {
    constructor() {
        super(Users, []);
    }

    findByUsername(username) {
        return this.Model.findOne({
            where: {
                username,
            },
        });
    }
}

module.exports = UsersData;