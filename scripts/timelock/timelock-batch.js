const Timelock = artifacts.require('Timelock');
const timelock = require('./timelock');
const config = require('../../truffle-config');
const time_lock_config = require('./timelock-config');
const argv = require('minimist')(process.argv.slice(2), {string: ['network']});
const readlineSync = require('readline-sync');
const timelockBatchQueue = require('./timelock-batch-queue');
const timelockBatchExecute = require('./timelock-batch-execute');

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
    if (type === time_lock_config.txTypes.queueTransaction) {
        await timelockBatchQueue(web3, config.sender);
    } else if (type === time_lock_config.txTypes.executeTransaction) {
        await timelockBatchExecute(web3, config.sender, argv['data']);
    }
    
    console.log('End.');
}




