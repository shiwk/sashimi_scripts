const helper = require('../../helper');

async function generateParams(input) {
    return helper.encodeParameters(['address', 'uint256'], [input.token, input.reservesRatio]);
}

module.exports = {
    generateParams : generateParams,
}


