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

async function getQueueContext(web3, method) {
    let lastest = await helper.latestBlockTime(web3);
    let eta = lastest.add(helper.duration(time_lock_config.delay));
    let context = await method.generate(eta);
    console.log(context);
    return context;
}

async function getQueueContextByAction(web3, method, action) {
    return await method.generateByAction(action);
}

async function getExecuteContext(web3, method) {
    let eta = new web3.utils.BN(time_lock_config.etaNumber);
    let context = await method.generate(eta);
    console.log(context);
    return context;
}

async function getCancelContext(web3, method) {
    let eta = new web3.utils.BN(time_lock_config.etaNumber);
    let context = await method.generate(eta);
    console.log(context);
    return context;
}

async function sendQueueTimeLock(context, sender) {
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

async function sendExecuteTimeLock(context, sender) {
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

async function sendCancelTimeLock(context, sender) {
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
    getQueueContext: getQueueContext,
    getQueueContextByAction: getQueueContextByAction,
    getExecuteContext: getExecuteContext,
    getCancelContext: getCancelContext,

    sendQueueTimeLock: sendQueueTimeLock,
    sendExecuteTimeLock: sendExecuteTimeLock,
    sendCancelTimeLock: sendCancelTimeLock,

    useKovanProvider: useKovanProvider,
    useMainnetProvider: useMainnetProvider
}