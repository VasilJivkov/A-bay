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

    describe('getAll() - if valid', () => {
        it('if no data, returns empty array', async () => {
            DBModel.getAll = () => [];
            const result = await data.getAll();

            expect(result).to.be.eq([]);
        })
        it('if object, returns the object', async () => {
            const object = [1, 2, 3];
            DBModel.getAll = () => {
                return object;
            }
            const tableData = await data.getAll();

            expect(tableData).deep.equal(object);
        })
    })
    describe('getById() - if valid', () => {
        describe('if valid', () => {
            it('existing id, returns the object', async () => {
                const id = 1;
                const object = { id: 1 };

                DBModel.getById = (id) => object;
                const resultObject = await data.getById(id);

                expect(resultObject).to.exist;
                // expect(resultObject.id).to.equal(1);
            })
        })
        describe('if non-valid', () => {
            it('if !existing id, returns null', async () => {
                DBModel.findById = (id) => null;

                const result = await data.getById(5);

                expect(result).to.be.null;
            })
        })
    })
    describe('create() - if valid', () => {
        it('when create and add object, expect to return the object', async () => {
            //         const object = {
            //             id: 'create',
            //         }

            //         DBModel.create = (obj) => {
            //             return obj;
            //         }

            //         const result = await data.create(object);
            //         expect(result).deep.equal(object);
            //     })
            // })
            // describe('update() - if is not valid', () => {
            //     it('on update, returns the object', async () => {
            //         const obj = {
            //             id: 1,
            //             data: [],
            //         };

            //         DBModel.update = (id, data) => {
            //             return obj;
            //         }

            //         const result = await data.update(id, data);
            //         expect(result).deep.equal(obj);
        })
    });
})