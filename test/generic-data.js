const Data = require('../app/data/generic-data');

const {
    expect,
} = require('chai');

describe('Tests generic data', () => {
    let DBModel = null;
    let data = null;

    DBModel = {
        getAll: () => { },
        getById: (id) => { },
        create: (obj) => { },
        update: (id, data) => { },
    }

    data = new Data(DBModel);

    describe('getById() - if valid', () => {
        describe('if non-valid', () => {
            it('if !existing id, returns null', async () => {
                DBModel.findById = (id) => null;

                const result = await data.getById(5);

                expect(result).to.be.null;
            })
        })
    })

})