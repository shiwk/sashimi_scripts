const config = require('./timelock-config');
const helper = require('./helper');

async function generate(eta) {
    console.log('eta: ', eta.toString())

    let newOwner = config.transferOwnership.newOwner;
    let params = helper.encodeParameters(['address'], [newOwner]);
    console.log('params', params.toString());

    return {
        'target' : config.transferOwnership.contract,
        'sig' : config.transferOwnership.sig,
        'params' : params,
        'eta' : eta
    }
}

async function queue(web3){
    console.log('transferOwnership..');
    let lastest = await helper.latestBlockTIme(web3);
    let eta = lastest.add(helper.duration(config.delay));
    return generate(eta);
}

async function execute(web3){
    console.log('transferOwnership..');
    let eta = new web3.utils.BN(config.etaNumber);
    return generate(eta);
}

module.exports = {
    queue : queue,
    execute : execute
}
