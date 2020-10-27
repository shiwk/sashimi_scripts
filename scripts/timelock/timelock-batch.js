const Timelock = artifacts.require('Timelock');
const timelock = require('./timelock');
const config = require('../../truffle-config');
const time_lock_config = require('./timelock-config');
const time_lock_methods = require('./timelock-methods');
const argv = require('minimist')(process.argv.slice(2), {string: ['network']});
const readlineSync = require('readline-sync');
const batch = require('./batch.json');
const helper = require('./helper');

module.exports = async function () {
    console.log(`network: ${argv['network']}\n`
        + `time lock type: ${argv['type']}\n`
        + `sender: ${config.sender}`);

    if (readlineSync.keyInYN('Are you sure?')) {
        // 'Y' key was pressed.
        console.log('Yes.');
        // Do something...
    } else {
        // Another key was pressed.
        console.log('No.');
        return;
    }

    let web3;
    if (argv['network'] === 'kovan') {
        web3 = await timelock.useKovanProvider(Timelock);
    } else if (argv['network'] === 'mainnet') {
        web3 = await timelock.useMainnetProvider(Timelock);
    }

    let type = argv['type'];
    let lastest = await helper.latestBlockTime(web3);
    let eta = lastest.add(helper.duration(batch.delay));

    let actions = batch.actions;
    for (let i = 0; i < actions.length; i++) {
        console.log("\naction:", i);

        let action = actions[i];
        let method = action.methodName;
        let timeLockMethod = time_lock_methods.getTimeLockMethod(method);

        if (type === time_lock_config.txTypes.queueTransaction) {
            let context = await timelock.queueContextByAction(web3, timeLockMethod, eta, action);
            await timelock.queueTimeLock(context, config.sender);
        } else if (type === time_lock_config.txTypes.executeTransaction) {
            let context = await timelock.executeContext(web3, timeLockMethod);
            await timelock.executeTimeLock(context, config.sender);
        } else if (type === time_lock_config.txTypes.cancelTransaction) {
            let context = await timelock.cancelContext(web3, timeLockMethod);
            await timelock.cancelTimeLock(context, config.sender);
        }
    }
    console.log('End.');
}




