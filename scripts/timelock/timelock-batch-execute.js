const helper = require('../helper');
const timelock = require('./timelock');

module.exports = async function (web3, file) {
    let data = await helper.readJson(file);
    let actions = data.actions;

    for (let i = 0; i < actions.length; i++) {
        console.log("\naction:", i);
        let action = actions[i];
        console.log(action);
        let result = await timelock.sendExecuteTimeLock(action, data.sender);
        if (!result)
        {
            console.log("Action %d failed.", i);
            break;
        }
    }
}