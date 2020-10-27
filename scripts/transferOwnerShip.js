const helper = require('./helper');
const time_lock_config = require('./timelock-config');

async function generate(eta) {
    console.log('transferOwnership');
    let newOwner = time_lock_config.transferOwnership.newOwner;
    let params = helper.encodeParameters(['address'], [newOwner]);

    return {
        'target': time_lock_config.transferOwnership.contract,
        'sig': time_lock_config.transferOwnership.sig,
        'params': params,
        'eta': eta
    }
}

module.exports = {
    generate: generate
}
