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


module.exports = {
    getMethodGenerator : (methodName) =>{
        return GENERATORS[methodName];
    }
}