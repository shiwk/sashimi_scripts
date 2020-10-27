const helper = require('../helper');
const time_lock_config = require('./timelock-config');
const contracts = require('./contracts-config');

async function generate(eta) {
    console.log('setPoint');
    let pid = time_lock_config.setAllocPoint.pid;
    let allocPoint = time_lock_config.setAllocPoint.allocPoint;
    let params = helper.encodeParameters(['uint256', 'uint256', 'bool'], [pid, allocPoint, false]);
    console.log('eta:', eta.toString());

    return {
        'target': contracts.kovan.chef,
        'sig': time_lock_config.setAllocPoint.sig,
        'params': params,
        'eta': eta
    }
}

module.exports = {
    generate: generate
}
