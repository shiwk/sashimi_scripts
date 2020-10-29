const helper = require('../helper');
const contracts = require('./contracts-config');
const providers = require('../../providers');
const time_lock_config = require('./timelock-config');

async function useKovanProvider(timelockContract) {
    this.timelock = await timelockContract.at(contracts.kovan.timeLock);
    return providers.useKovanProvider();
}

async function useMainnetProvider(timelockContract) {
    this.timelock = await timelockContract.at(contracts.mainnet.timeLock);
    return providers.useMainnetProvider();
}

async function queue(web3, method) {
    let lastest = await helper.latestBlockTime(web3);
    let eta = lastest.add(helper.duration(time_lock_config.delay));

    let context = await method.generate(eta);
    console.log(context);
    return context;
}

async function queueByAction(web3, method, action) {
    let context = await method.generateByAction(action);
    // console.log(context);
    return context;
}

async function executeContext(web3, method) {
    let eta = new web3.utils.BN(time_lock_config.etaNumber);
    let context = await method.generate(eta);
    console.log(context);
    return context;
}

async function cancelContext(web3, method) {
    let eta = new web3.utils.BN(time_lock_config.etaNumber);
    let context = await method.generate(eta);
    console.log(context);
    return context;
}

async function queueTimeLock(context, sender) {
    console.log('Sending queue tx..');
    await this.timelock.queueTransaction(
        context.target, '0', context.sig,
        context.params,
        context.eta,
        {from: sender}
    ).then(function (t) {
        console.log("Transaction %s executed.", t.tx);
    }).catch(function (e) {
        console.log(e);
        return false;
    });

    return true;
}

async function executeTimeLock(context, sender) {
    console.log('Sending execute tx..');
    await this.timelock.executeTransaction(
        context.target, '0', context.sig,
        context.params,
        context.eta,
        {from: sender}
    ).then(function (t) {
        console.log("Transaction %s executed.", t.tx);
    }).catch(function (e) {
        console.log(e);
        return false;
    });

    return true;
}

async function cancelTimeLock(context, sender) {
    console.log('Sending cancel tx..');
    await this.timelock.cancelTransaction(
        context.target, '0', context.sig,
        context.params,
        context.eta,
        {from: sender}
    ).then(function (t) {
        console.log("Transaction %s executed.", t.tx);
    }).catch(function (e) {
        console.log(e);
        return false;
    });
    return true;
}


module.exports = {
    queueContext: queue,
    queueContextByAction: queueByAction,
    executeContext: executeContext,
    cancelContext: cancelContext,

    queueTimeLock: queueTimeLock,
    executeTimeLock: executeTimeLock,
    cancelTimeLock: cancelTimeLock,

    useKovanProvider: useKovanProvider,
    useMainnetProvider: useMainnetProvider
}