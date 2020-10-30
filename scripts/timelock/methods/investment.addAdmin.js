const helper = require('../../helper');

async function generateParams(input) {
    return helper.encodeParameters(['address'], [input.admin]);
}

module.exports = {
    generateParams : generateParams,
}
