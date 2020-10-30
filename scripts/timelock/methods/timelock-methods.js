const transferOwnerShip = require('./transferOwnerShip');
const addAdmin = require('./investment.addAdmin');
const setPoint = require('./masterchef.set');
const addPool = require('./masterchef.add');
const setFeeTo = require('./factory.setFeeTo');
const addProvider = require('./investmnt.addProvider');
const changeReservesRatio = require('./investment.changeReservesRatio');
const methods = require('./methods.json');

const GENERATORS = {
    [methods.addPoolMethod.name]: addPool,
    [methods.setPointMethod.name]: setPoint,
    [methods.transferOwnershipMethod.name]: transferOwnerShip,
    [methods.setFeeToMethod.name]: setFeeTo,
    [methods.addProviderMethod.name]: addProvider,
    [methods.changeReservesRatioMethod.name]: changeReservesRatio,
    [methods.addAdmin.name]: addAdmin
};

const SIGS = {
    [methods.addPoolMethod.name]: methods.addPoolMethod.sig,
    [methods.setPointMethod.name]: methods.setPointMethod.sig,
    [methods.transferOwnershipMethod.name]: methods.transferOwnershipMethod.sig,
    [methods.setFeeToMethod.name]: methods.setFeeToMethod.sig,
    [methods.addProviderMethod.name]: methods.addProviderMethod.sig,
    [methods.changeReservesRatioMethod.name]: methods.changeReservesRatioMethod.sig,
    [methods.addAdmin.name]: methods.addAdmin.sig
};

module.exports = {
    getMethodGenerator : (methodName) =>{
        return GENERATORS[methodName];
    },
    getMethodSig : (methodName) =>{
        return SIGS[methodName];
    }
}