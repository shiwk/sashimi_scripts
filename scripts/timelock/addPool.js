const helper = require('../helper');
const time_lock_config = require('./timelock-config');
const contracts = require('./contracts-config');

async function generate(eta) {

    let action = {
        'target': contracts.kovan.chef,
        'sig': time_lock_config.addPool.sig,
        'eta': eta,
        'params': {
            'lpToken': time_lock_config.addPool.lpAddress,
            'allocPoint': time_lock_config.addPool.allocPoint,
        }
    }
    return generateByAction(action);
}

async function generateByAction(action) {
    console.log('addPool');
    let params = helper.encodeParameters(['uint256', 'address', 'bool'], [action.params.allocPoint, action.params.lpToken, false]);

    console.log('eta:', action.eta.toString());

    return {
        'target': action.target,
        'sig': action.sig,
        'params': params,
        'eta': action.eta
    }
}

module.exports = {
    generate: generate,
    generateByAction: generateByAction
}
