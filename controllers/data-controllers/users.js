const GeneralData = require('./general');

const {
    Users,
} = require('../../models/models');

class UsersData extends GeneralData {
    constructor() {
        super(Users);
    }

    get all() {
        return this.getAll();
    }

    createUser(obj) {
        return this.create(obj);
    }

    /**
      * @description Expects array with objects
      * with arttribute and value to update
      * @param Array with [id, data]
      * @param id number
      * @param data array form objects with arttribute and value to update
      * @return Returns db object with id = id parameter.
      */

    updateUser([id, obj]) {
        return this.update(id, obj);
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
