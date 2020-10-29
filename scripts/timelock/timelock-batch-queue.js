const helper = require('../helper');
const timelock = require('./timelock');
const time_lock_methods = require('./timelock-methods');
const batch = require('./batch');

module.exports = async function (web3) {
    let actions = batch.actions;
    let sender = batch.sender;
    let data ={
        'actions' :[],
        'sender' : sender
    };

    let lastest = await helper.latestBlockTime(web3);
    let eta = lastest.add(helper.duration(batch.delay));

    for (let i = 0; i < actions.length; i++) {
        console.log("\naction:", i);
        let action = actions[i];
        console.log(action);
        let method = action.methodName;
        let timeLockMethod = time_lock_methods.getTimeLockMethod(method);

        action.eta = eta;
        let context = await timelock.queueContextByAction(web3, timeLockMethod, action);
        let result = await timelock.queueTimeLock(context, sender);
        if (!result)
        {
            console.log("Action %d failed.", i);
            break;
        }
        let action2 = context;
        action2.eta = eta.toString();
        data.actions.push(action2);
    }

    await helper.writeJson(`${new Date().toISOString()}`, data);
}