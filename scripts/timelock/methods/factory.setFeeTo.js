const helper = require('../../helper');

async function generateParams(input) {
    return helper.encodeParameters(['address'], [input.feeTo]);
}

module.exports = {
    generateParams : generateParams
}
