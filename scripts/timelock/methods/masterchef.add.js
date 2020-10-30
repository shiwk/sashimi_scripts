const helper = require('../../helper');

async function generateParams(input) {
    return helper.encodeParameters(['uint256', 'address', 'bool'], [input.allocPoint, input.lpToken, false]);
}

module.exports = {
    generateParams: generateParams
}

