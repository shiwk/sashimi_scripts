const helper = require('../helper');
const time_lock_config = require('./timelock-config');
const contracts = require('./contracts-config');

async function generate(eta) {

    let action = {
        'target' : contracts.kovan.chef,
        'sig' : time_lock_config.methods.setPointMethod.sig,
        'eta' : eta,
        'params' : {
            'pid' : time_lock_config.params.setAllocPoint.pid,
            'allocPoint' : time_lock_config.params.setAllocPoint.allocPoint,
        }
    }
    return generateByAction(action);
}

async function generateByAction(action) {
    console.log('setPoint');
    let params = helper.encodeParameters(['uint256', 'uint256', 'bool'], [action.params.pid, action.params.allocPoint, false]);

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
    generateByAction : generateByAction
}
