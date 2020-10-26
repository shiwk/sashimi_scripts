const transferOwnerShip = require('./transferOwnerShip');
const timelock_config = require('./timelock-config');

function getTimeLockMethod(method) {
    if (method === timelock_config.methods.transferOwnershipMethod)
        return transferOwnerShip;
    if (method === timelock_config.methods.setPointMethod)
        return transferOwnerShip;
    if (method === timelock_config.methods.addProviderMethod)
        return transferOwnerShip;
    if (method === timelock_config.methods.setFeeToMethod)
        return transferOwnerShip;
    if (method === timelock_config.methods.setMigratorMethod)
        return transferOwnerShip;
    if (method === timelock_config.methods.addPoolMethod)
        return transferOwnerShip;
    if (method === timelock_config.methods.setPendingAdminMethod)
        return transferOwnerShip;
    if (method === timelock_config.methods.changeReservesRatioMethod)
        return transferOwnerShip;
}

module.exports = {
    getTimeLockMethod: getTimeLockMethod
}