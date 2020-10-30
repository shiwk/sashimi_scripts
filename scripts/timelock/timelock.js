const contracts = require('./contracts-config');
const providers = require('../../providers');
const timelock_config = require('./timelock-config');

async function useKovanProvider(timelockContract) {
    this.timelock = await timelockContract.at(contracts.kovan.timeLock);
    this.sender = timelock_config.admin.kovan;
    return providers.useKovanProvider();
}

async function useMainnetProvider(timelockContract) {
    this.timelock = await timelockContract.at(contracts.mainnet.timeLock);
    this.sender = timelock_config.admin.mainnet;
    return providers.useMainnetProvider();
}

async function getQueueContextByAction(web3, method, action) {
    console.log('eta:', action.eta.toString());
    let params = await method.generateParams(action.params);
    return {
        'target': action.target,
        'sig': action.sig,
        'params': params,
        'eta': action.eta
    }
}

async function sendQueueTimeLock(context) {
    console.log(`Sending queue tx from sender: ${this.sender} ..`);
    return await this.timelock.queueTransaction(
        context.target, '0', context.sig,
        context.params,
        context.eta,
        {from: this.sender}
    ).then(function (t) {
        console.log("Transaction %s executed.", t.tx);
        return true;
    }).catch(function (e) {
        console.log(e);
        return false;
    });
}

async function sendExecuteTimeLock(context) {
    console.log(`Sending execute tx from sender: ${this.sender} ..`);
    return await this.timelock.executeTransaction(
        context.target, '0', context.sig,
        context.params,
        context.eta,
        {from: this.sender}
    ).then(function (t) {
        console.log("Transaction %s executed.", t.tx);
        return true;
    }).catch(function (e) {
        console.log(e);
        return false;
    });
}

async function sendCancelTimeLock(context) {
    console.log(`Sending cancel tx from sender: ${this.sender} ..`);
    return await this.timelock.cancelTransaction(
        context.target, '0', context.sig,
        context.params,
        context.eta,
        {from: this.sender}
    ).then(function (t) {
        console.log("Transaction %s executed.", t.tx);
        return true;
    }).catch(function (e) {
        console.log(e);
        return false;
    });
}


module.exports = {
    getQueueContextByAction: getQueueContextByAction,

    sendQueueTimeLock: sendQueueTimeLock,
    sendExecuteTimeLock: sendExecuteTimeLock,
    sendCancelTimeLock: sendCancelTimeLock,

    useKovanProvider: useKovanProvider,
    useMainnetProvider: useMainnetProvider
}