const helper = require('../helper');
const time_lock_config = require('./timelock-config');

async function generate(eta) {
    let action = {
        'params' :{
            'newOwner' : time_lock_config.params.transferOwnership.newOwner,
        },
        'target' : time_lock_config.params.transferOwnership.contract,
        'sig' : time_lock_config.methods.transferOwnershipMethod.sig,
        'eta' : eta
    }

    return generateByAction(action);
}

async function generateByAction(action) {
    console.log('transferOwnership');
    let params = helper.encodeParameters(['address'], [action.params.newOwner]);
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
