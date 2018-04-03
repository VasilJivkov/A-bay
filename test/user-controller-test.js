const {
    expect,
} = require('chai');

const {
    UserController,
} = require('../app/controllers');
let usersArray = [];

const mockData = {
    users: {
        getAll() {
            return usersArray;
        },
        getById(id) {
            return usersArray.find((user) => user.id === id);
        },
        create(user) {
            return user;
        },
        findByUsername(name) {
            return usersArray.find((user) => user.username === name);
        },
        update(id, data) {
            const user = this.getById(id);
            data.forEach((keyToUpdate) => {
                const attr = Object.keys(keyToUpdate)[0];
                const value = keyToUpdate[attr];
                if (user.attr) {
                    user.attr = value;
                } else {
                    return false;
                }
            });
            return true;
        },
    },
};

describe('UserController', () => {
    describe('getAll()', () => {
        it('when there are no users, expect empty array', async () => {
            usersArray = [];
            const controller = new UserController(mockData);

            const allUsers = await controller.getAll();

            expect(allUsers).to.be.empty;
        });
    });
    describe('getAll()', () => {
        it('when there are users, return an array of users', async () => {
            usersArray = [{
                username: 'test',
                email:' test@test.bg',
                password: 'somepassword',
            }, {
                username: 'test2',
                email: 'test2@test.bg',
                password: 'samepassword',
            }];
            const controller = new UserController(mockData);

            const allUsers = await controller.getAll();

            expect(allUsers).to.be.deep.equal(usersArray);
        });
    });
    describe('getById(id)', () => {
        it('when there is no user with such id, expect user to be undefined', async () => {
            const id = 1;
            usersArray = [{
                id: 4,
                name: 'randomUsername',
                password: 'uniquePass',
            }];
            const controller = new UserController(mockData);

            const user = await controller.getById(id);

            expect(typeof user).to.be.equal('undefined');
        });
        it('when there is user with such id, expect the user', async () => {
            const id = 1;
            usersArray = [{
                id,
                name: 'randomUsername',
                password: 'uniquePass',
            }];
            const controller = new UserController(mockData);

            const user = await controller.getById(id);

            expect(user.id).to.be.equal(id);
        });
    });
    describe('create()', () => {
        it('when data is valid, expect to be created')
    });
});
