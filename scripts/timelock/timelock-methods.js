const transferOwnerShip = require('./transferOwnerShip');
const time_lock_config = require('./timelock-config');
const setPoint = require('./setPoint');
const addPool = require('./addPool');

function getTimeLockMethod(method) {
    if (method === time_lock_config.methods.transferOwnershipMethod.name)
        return transferOwnerShip;
    if (method === time_lock_config.methods.setPointMethod.name)
        return setPoint;
    if (method === time_lock_config.methods.addPoolMethod.name)
        return addPool;
    if (method === time_lock_config.methods.addProviderMethod)
        return transferOwnerShip;
    if (method === time_lock_config.methods.setFeeToMethod)
        return transferOwnerShip;
    if (method === time_lock_config.methods.setMigratorMethod)
        return transferOwnerShip;
    if (method === time_lock_config.methods.setPendingAdminMethod)
        return transferOwnerShip;
    if (method === time_lock_config.methods.changeReservesRatioMethod)
        return transferOwnerShip;
}

module.exports = {
    getTimeLockMethod: getTimeLockMethod
}