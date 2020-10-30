const contracts = require('../contracts-config');
const methods = require('../methods/methods.json');

module.exports = {
    delay: 3,
    actions: [
        {
            target: contracts.mainnet.chef,
            methodName: methods.addPoolMethod.name,
            params: {
                lpToken: '0x96559937e9c4475160CA040b16cDA93E3EfBD75A',
                allocPoint: 500,
            },
            sig: methods.addPoolMethod.sig
        },
        {
            methodName: methods.setPointMethod.name,
            target: contracts.mainnet.chef,
            params: {
                pid: 0,
                allocPoint: 1000
            },
            sig: methods.setPointMethod.sig
        },
        {
            methodName: methods.transferOwnershipMethod.name,
            target: contracts.mainnet.investment,
            params: {
                newOwner: '0x2f8ab5cD7179B3d42d177a45B18cF7C8FF8EFA77'
            },
            sig: methods.transferOwnershipMethod.sig
        },
        {
            methodName: methods.setFeeToMethod.name,
            target: contracts.mainnet.factory,
            params: {
                feeTo: '0x3a979edf5c12092a6d5048b1849c2a32900fdfce'
            },
            sig: methods.setFeeToMethod.sig
        },
        {
            methodName: methods.addProviderMethod.name,
            target: contracts.mainnet.investment,
            params: {
                token: '0xA050886815CFc52a24B9C4aD044ca199990B6690',
                provider: '0x62c412A1708c5FD80Cf37F893811a771027d8D38'
            },
            sig: methods.addProviderMethod.sig
        },
        {
            methodName: methods.changeReservesRatioMethod.name,
            target: contracts.mainnet.investment,
            params: {
                token: '0xA050886815CFc52a24B9C4aD044ca199990B6690',
                reservesRatio: 10000
            },
            sig: methods.changeReservesRatioMethod.sig
        },
        {
            methodName: methods.addAdmin.name,
            target: contracts.mainnet.investment,
            params: {
                admin: '0x2D4E11221b960E4Ed6D0D2358e26b9c89DfF404a',
            },
            sig: methods.addAdmin.sig
        }
    ]
}