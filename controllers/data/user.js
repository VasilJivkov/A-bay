const Data = require('./generic-data');
const {
    Users,
} = require('../../models/models');


class UsersData extends Data {
    constructor() {
        super(Users);
    }


}

module.exports = UsersData;