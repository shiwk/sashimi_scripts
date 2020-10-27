const batch = require('./batch.json');
const helper = require('../helper');
const timelock = require('./timelock');
const time_lock_methods = require('./timelock-methods');

module.exports = async function (web3, sender) {

    let lastest = await helper.latestBlockTime(web3);
    let eta = lastest.add(helper.duration(batch.delay));

    let actions = batch.actions;
    let data ={
        'actions' :[],
        'sender' : sender
    };

    for (let i = 0; i < actions.length; i++) {
        console.log("\naction:", i);

        let action = actions[i];
        let method = action.methodName;
        let timeLockMethod = time_lock_methods.getTimeLockMethod(method);

        action.eta = eta;
        let context = await timelock.queueContextByAction(web3, timeLockMethod, action);
        await timelock.queueTimeLock(context, sender);
        let action2 = context;
        action2.eta = eta.toString();
        data.actions.push(action2);
    }
    await helper.writeJson(`${new Date().toISOString()}`, data);
}