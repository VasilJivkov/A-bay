const Data = require('./generic-data');
const {
    Users,
} = require('../../models/models');


class UsersData extends Data {
    constructor() {
        super(Users, []);
    }

    /**
     * @description Find custom user by given id.
     * @param username string
     * @return Returns custom user with all of his data from the Users model
     */

    findByUsername(username) {
        return this.Model.findOne({
            where: {
                username,
            },
        });
    }
}

module.exports = UsersData;
