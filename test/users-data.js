const UsersData = require('../app/data/user-data');
const Data = require('../app/data/generic-data');

const {
    expect,
} = require('chai');

describe('Test users data', () => {
    let username = null;
    let user = null;
    let data = null;

    let DBModel = {
        findOne: () => { },
    }

    class UsersData extends Data {
        constructor() {
            super(user)
        }

        findByUserName(username) {
            return DBModel.findOne();
        }
    }

    data = new UsersData();

    describe('findByUsername()', () => {
        it('if  !user, expected result => user', async () => {
            const userName = 'test user';

            const user = {
                'username': userName,
            }

            DBModel.findOne = () => {
                return user;
            }

            const userData = await data.findByUserName(userName);

            expect(userData).to.be.equal(user);
        })
        it('if  !user, expected result => null', async () => {
            username = null;

            DBModel.findOne = () => {
                return username;
            }

            const userData = await data.findByUserName('GoshoNEePich')

            expect(userData).to.be.equal(username);
        })
    })
});
