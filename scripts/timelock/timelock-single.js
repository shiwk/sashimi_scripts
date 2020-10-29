const Timelock = artifacts.require('Timelock');
const timelock = require('./timelock');
const config = require('../../truffle-config');
const time_lock_config = require('./timelock-config');
const time_lock_methods = require('./timelock-methods');

const argv = require('minimist')(process.argv.slice(2), {string: ['network']});
const readlineSync = require('readline-sync');

//
// function encodeParameters(types, values) {
//     const abi = new ethers.utils.AbiCoder();
//     try {
//         return abi.encode(types, values);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// async function latestBlockTIme() {
//     const block = await web3.eth.getBlock('latest');
//     return new web3.utils.BN(block.timestamp);
// }
//
// async function setTimeLockPendingAdminQueueTransaction(sender) {
//     console.log('setTimeLockPendingAdmin - Queue - Transaction..');
//     let lastest = await latestBlockTIme();
//     console.log('latest: ', lastest.toString());
//     let eta = lastest.add(time.duration.minutes(config.delay));
//     console.log('eta: ', eta.toString())
//
//
//     let newPendingOwner = config.setPendingAdmin.pendingAdmin;
//     let params = encodeParameters(['address'], [newPendingOwner]);
//     console.log('params', params.toString())
//     await this.timelock.queueTransaction(
//         this.timelock.address, '0', 'setPendingAdmin(address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
//
// async function setTimeLockPendingAdminExecuteTransaction(sender) {
//     console.log('setTimeLockPendingAdmin - Execute - Transaction..');
//     let eta = new web3.utils.BN(config.etaNumber);
//     console.log('eta: ', eta.toString())
//
//     let newPendingOwner = config.setPendingAdmin.pendingAdmin;
//     let params = encodeParameters(['address'], [newPendingOwner]);
//     console.log('params', params.toString())
//     await this.timelock.executeTransaction(
//         this.timelock.address, '0', 'setPendingAdmin(address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function setFeeToQueueTransaction(sender) {
//     console.log('setFeeTo QueueTransaction..');
//
//     let lastest = await latestBlockTIme();
//     console.log('latest: ', lastest.toString());
//     let eta = lastest.add(time.duration.minutes(config.delay));
//     console.log('eta: ', eta.toString())
//
//     let feeTo = config.setFeeTo.feeTo;
//     let params = encodeParameters(['address'], [feeTo]);
//     console.log('params', params.toString())
//     await this.timelock.queueTransaction(
//         this.factory.address, '0', 'setFeeTo(address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function setFeeToExecuteTransaction(sender) {
//     console.log('addProvider ExecuteTransaction..');
//     let eta = new web3.utils.BN(config.etaNumber);
//     console.log('eta: ', eta.toString())
//
//     let feeTo = config.setFeeTo.feeTo;
//     let params = encodeParameters(['address'], [feeTo]);
//     console.log('params', params.toString())
//     await this.timelock.executeTransaction(
//         this.factory.address, '0', 'setFeeTo(address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function addProviderQueueTransaction(sender) {
//     console.log('addProvider QueueTransaction..');
//
//     let lastest = await latestBlockTIme();
//     console.log('latest: ', lastest.toString());
//     let eta = lastest.add(time.duration.minutes(config.delay));
//     console.log('eta: ', eta.toString())
//
//     let token = config.addProvider.token;
//     let vault = config.addProvider.vault;
//
//     let params = encodeParameters(['address', 'address'], [token, vault]);
//     console.log('params', params.toString())
//     await this.timelock.queueTransaction(
//         this.investment.address, '0', 'addProvider(address,address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function addProviderExecuteTransaction(sender) {
//     console.log('setFeeTo ExecuteTransaction..');
//     let eta = new web3.utils.BN(config.etaNumber);
//     console.log('eta: ', eta.toString())
//
//     let token = config.addProvider.token;
//     let vault = config.addProvider.vault;
//
//     let params = encodeParameters(['address', 'address'], [token, vault]);
//     console.log('params', params.toString())
//     await this.timelock.executeTransaction(
//         this.investment.address, '0', 'addProvider(address,address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function changeReservesRatioQueueTransaction(sender) {
//     console.log('changeReservesRatio QueueTransaction..');
//
//     let lastest = await latestBlockTIme();
//     console.log('latest: ', lastest.toString());
//     let eta = lastest.add(time.duration.minutes(config.delay));
//     console.log('eta: ', eta.toString())
//
//     let token = config.changeReservesRatio.token;
//     let reservesRatio = config.changeReservesRatio.reservesRatio;
//
//     let params = encodeParameters(['address', 'uint256'], [token, reservesRatio]);
//     console.log('params', params.toString())
//     await this.timelock.queueTransaction(
//         this.investment.address, '0', 'changeReservesRatio(address,uint256)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function changeReservesRatioExecuteTransaction(sender) {
//     console.log('setFeeTo ExecuteTransaction..');
//     let eta = new web3.utils.BN(config.etaNumber);
//     console.log('eta: ', eta.toString())
//
//     let token = config.changeReservesRatio.token;
//     let reservesRatio = config.changeReservesRatio.reservesRatio;
//
//     let params = encodeParameters(['address', 'uint256'], [token, reservesRatio]);
//     console.log('params', params.toString())
//     await this.timelock.executeTransaction(
//         this.investment.address, '0', 'changeReservesRatio(address,uint256)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function setMigratorQueueTransaction(sender) {
//     console.log('setMigratorQueueTransaction..');
//
//     let lastest = await latestBlockTIme();
//     console.log('latest: ', lastest.toString());
//     let eta = lastest.add(time.duration.minutes(config.delay));
//     console.log('eta: ', eta.toString())
//
//     let migrator = config.setMigrator.migrator;
//     let params = encodeParameters(['address'], [migrator]);
//     console.log('params', params.toString())
//     await this.timelock.queueTransaction(
//         this.chef.address, '0', 'setMigrator(address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }
//
// async function setMigratorExecuteTransaction(sender) {
//     console.log('setMigratorExecuteTransaction..');
//     let eta = new web3.utils.BN(config.etaNumber);
//     console.log('eta: ', eta.toString())
//
//     let migrator = config.setMigrator.migrator;
//     let params = encodeParameters(['address'], [migrator]);
//     console.log('params', params.toString())
//     await this.timelock.executeTransaction(
//         this.chef.address, '0', 'setMigrator(address)',
//         params,
//         eta,
//         {from: sender}
//     ).then(function (t) {
//         console.log("Transaction - :", t)
//     }).catch(function (e) {
//         console.log(e);
//     });
// }


module.exports = async function () {
    console.log(`network: ${argv['network']}\n`
        + `transaction: ${argv['method']}\n`
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

    let method = argv['method'];
    let timeLockMethod = time_lock_methods.getTimeLockMethod(method);

    let type = argv['type'];
    if (type === time_lock_config.txTypes.queueTransaction) {
        let context = await timelock.queueContext(web3, timeLockMethod);
        await timelock.queueTimeLock(context, config.sender);
    } else if (type === time_lock_config.txTypes.executeTransaction) {
        let context = await timelock.executeContext(web3, timeLockMethod);
        await timelock.executeTimeLock(context, config.sender);
    } else if (type === time_lock_config.txTypes.cancelTransaction) {
        let context = await timelock.cancelContext(web3, timeLockMethod);
        await timelock.cancelTimeLock(context, config.sender);
    }

    console.log('End.');
}




