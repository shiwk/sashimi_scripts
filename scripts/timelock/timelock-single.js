// const Timelock = artifacts.require('Timelock');
// const timelock = require('./timelock');
// const time_lock_config = require('./timelock-config');
// const time_lock_methods = require('./methods/timelock-methods');
//
// const argv = require('minimist')(process.argv.slice(2), {string: ['network']});
// const readlineSync = require('readline-sync');
//
//
// //
// // async function setTimeLockPendingAdminQueueTransaction(sender) {
// //     console.log('setTimeLockPendingAdmin - Queue - Transaction..');
// //     let lastest = await latestBlockTIme();
// //     console.log('latest: ', lastest.toString());
// //     let eta = lastest.add(time.duration.minutes(config.delay));
// //     console.log('eta: ', eta.toString())
// //
// //
// //     let newPendingOwner = config.setPendingAdmin.pendingAdmin;
// //     let params = encodeParameters(['address'], [newPendingOwner]);
// //     console.log('params', params.toString())
// //     await this.timelock.queueTransaction(
// //         this.timelock.address, '0', 'setPendingAdmin(address)',
// //         params,
// //         eta,
// //         {from: sender}
// //     ).then(function (t) {
// //         console.log("Transaction - :", t)
// //     }).catch(function (e) {
// //         console.log(e);
// //     });
// // }
// //
// //
// // async function setTimeLockPendingAdminExecuteTransaction(sender) {
// //     console.log('setTimeLockPendingAdmin - Execute - Transaction..');
// //     let eta = new web3.utils.BN(config.etaNumber);
// //     console.log('eta: ', eta.toString())
// //
// //     let newPendingOwner = config.setPendingAdmin.pendingAdmin;
// //     let params = encodeParameters(['address'], [newPendingOwner]);
// //     console.log('params', params.toString())
// //     await this.timelock.executeTransaction(
// //         this.timelock.address, '0', 'setPendingAdmin(address)',
// //         params,
// //         eta,
// //         {from: sender}
// //     ).then(function (t) {
// //         console.log("Transaction - :", t)
// //     }).catch(function (e) {
// //         console.log(e);
// //     });
// // }
// //
//
// //
// //
// // async function changeReservesRatioQueueTransaction(sender) {
// //     console.log('changeReservesRatio QueueTransaction..');
// //
// //     let lastest = await latestBlockTIme();
// //     console.log('latest: ', lastest.toString());
// //     let eta = lastest.add(time.duration.minutes(config.delay));
// //     console.log('eta: ', eta.toString())
// //
// //     let token = config.changeReservesRatio.token;
// //     let reservesRatio = config.changeReservesRatio.reservesRatio;
// //
// //     let params = encodeParameters(['address', 'uint256'], [token, reservesRatio]);
// //     console.log('params', params.toString())
// //     await this.timelock.queueTransaction(
// //         this.investment.address, '0', 'changeReservesRatio(address,uint256)',
// //         params,
// //         eta,
// //         {from: sender}
// //     ).then(function (t) {
// //         console.log("Transaction - :", t)
// //     }).catch(function (e) {
// //         console.log(e);
// //     });
// // }
// //
// // async function changeReservesRatioExecuteTransaction(sender) {
// //     console.log('setFeeTo ExecuteTransaction..');
// //     let eta = new web3.utils.BN(config.etaNumber);
// //     console.log('eta: ', eta.toString())
// //
// //     let token = config.changeReservesRatio.token;
// //     let reservesRatio = config.changeReservesRatio.reservesRatio;
// //
// //     let params = encodeParameters(['address', 'uint256'], [token, reservesRatio]);
// //     console.log('params', params.toString())
// //     await this.timelock.executeTransaction(
// //         this.investment.address, '0', 'changeReservesRatio(address,uint256)',
// //         params,
// //         eta,
// //         {from: sender}
// //     ).then(function (t) {
// //         console.log("Transaction - :", t)
// //     }).catch(function (e) {
// //         console.log(e);
// //     });
// // }
// //
// // async function setMigratorQueueTransaction(sender) {
// //     console.log('setMigratorQueueTransaction..');
// //
// //     let lastest = await latestBlockTIme();
// //     console.log('latest: ', lastest.toString());
// //     let eta = lastest.add(time.duration.minutes(config.delay));
// //     console.log('eta: ', eta.toString())
// //
// //     let migrator = config.setMigrator.migrator;
// //     let params = encodeParameters(['address'], [migrator]);
// //     console.log('params', params.toString())
// //     await this.timelock.queueTransaction(
// //         this.chef.address, '0', 'setMigrator(address)',
// //         params,
// //         eta,
// //         {from: sender}
// //     ).then(function (t) {
// //         console.log("Transaction - :", t)
// //     }).catch(function (e) {
// //         console.log(e);
// //     });
// // }
// //
// // async function setMigratorExecuteTransaction(sender) {
// //     console.log('setMigratorExecuteTransaction..');
// //     let eta = new web3.utils.BN(config.etaNumber);
// //     console.log('eta: ', eta.toString())
// //
// //     let migrator = config.setMigrator.migrator;
// //     let params = encodeParameters(['address'], [migrator]);
// //     console.log('params', params.toString())
// //     await this.timelock.executeTransaction(
// //         this.chef.address, '0', 'setMigrator(address)',
// //         params,
// //         eta,
// //         {from: sender}
// //     ).then(function (t) {
// //         console.log("Transaction - :", t)
// //     }).catch(function (e) {
// //         console.log(e);
// //     });
// // }
//
//
// module.exports = async function () {
//     console.log(`network: ${argv['network']}\n`
//         + `transaction: ${argv['method']}\n`
//         + `time lock type: ${argv['type']}\n`);
//
//     if (readlineSync.keyInYN('Are you sure?')) {
//         // 'Y' key was pressed.
//         console.log('Yes.');
//         // Do something...
//     } else {
//         // Another key was pressed.
//         console.log('No.');
//         return;
//     }
//
//     let web3;
//     if (argv['network'] === 'kovan') {
//         web3 = await timelock.useKovanProvider(Timelock);
//     } else if (argv['network'] === 'mainnet') {
//         web3 = await timelock.useMainnetProvider(Timelock);
//     }
//
//     let method = argv['method'];
//     let timeLockMethod = time_lock_methods.getTimeLockMethod(method);
//
//     let type = argv['type'];
//     if (type === time_lock_config.txTypes.queueTransaction) {
//         let context = await timelock.getQueueContext(web3, timeLockMethod);
//         await timelock.sendQueueTimeLock(context);
//     } else if (type === time_lock_config.txTypes.executeTransaction) {
//         let context = await timelock.getExecuteContext(web3, timeLockMethod);
//         await timelock.sendExecuteTimeLock(context);
//     } else if (type === time_lock_config.txTypes.cancelTransaction) {
//         let context = await timelock.getCancelContext(web3, timeLockMethod);
//         await timelock.sendCancelTimeLock(context);
//     }
//
//     console.log('End.');
// }
//
//
//
//
