const helper = require('../../helper');

async function generateParams(input) {
    return helper.encodeParameters(['uint256', 'uint256', 'bool'], [input.pid, input.allocPoint, false]);
}

module.exports = {
    generateParams : generateParams
}
