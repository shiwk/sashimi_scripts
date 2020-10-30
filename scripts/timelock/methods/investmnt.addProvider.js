const helper = require('../../helper');

async function generateParams(input) {
    return helper.encodeParameters(['address', 'address'], [input.token, input.provider]);
}

module.exports = {
    generateParams : generateParams,
}