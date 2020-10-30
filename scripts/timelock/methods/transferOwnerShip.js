const helper = require('../../helper');

async function generateParams(input) {
    return helper.encodeParameters(['address'], [input.newOwner]);
}

module.exports = {
    generateParams : generateParams,
}
