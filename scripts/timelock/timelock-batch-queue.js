const helper = require('../helper');
const timelock = require('./timelock');
const timelock_methods = require('./methods/timelock-methods');

module.exports = async function (web3, network) {
    const batch = require(`./batch/${network}.js`);
    let actions = batch.actions;
    let data ={
        'actions' :[],
    };

    let lastest = await helper.latestBlockTime(web3);
    let eta = lastest.add(helper.duration(batch.delay));

    for (let i = 0; i < actions.length; i++) {
        console.log('\n'+'='.repeat(100)+'\n');
        console.log("Action:", i);
        let action = actions[i];
        console.log(action);
        let methodName = action.methodName;
        let timeLockMethod = timelock_methods.getMethodGenerator(methodName);
        action.sig = timelock_methods.getMethodSig(methodName);
        action.eta = eta;

        let context = await timelock.getQueueContextByAction(web3, timeLockMethod, action);
        let result = await timelock.sendQueueTimeLock(context);
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