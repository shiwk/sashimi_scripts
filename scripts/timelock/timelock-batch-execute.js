const helper = require('../helper');
const timelock = require('./timelock');
const time_lock_methods = require('./timelock-methods');

module.exports = async function (web3, sender, file) {
    let data = await helper.readJson(file);
    let actions = data.actions;
    console.log(actions);

    for (let i = 0; i < actions.length; i++) {
        console.log("\naction:", i);
        let action = actions[i];
        console.log(action);
        // let method = action.methodName;
        // let timeLockMethod = time_lock_methods.getTimeLockMethod(method);
        // let context = await timelock.executeContextByAction(web3, timeLockMethod, action);
        await timelock.executeTimeLock(action, sender);
    }
}