/* TO DO: add the paths below and the secret*/

const secret = 'Some Secret';
/* eslint-disable */
const port = process.env.PORT || 3003;

const dbConnectionString = process.env.NODE_ENV === 'production' ?
    'cloud path' :
    'local path';
/* eslint-enable */

module.exports = {
    port,
    secret,
    dbConnectionString,
};
