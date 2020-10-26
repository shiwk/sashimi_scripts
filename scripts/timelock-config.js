const keys = require("../keys");

const setPendingAdminMethod = 'setPendingAdmin'
const addPoolMethod = 'addPool'
const setPointMethod = 'setPoint'
const transferOwnershipMethod = 'transferOwnership'
const setMigratorMethod = 'setMigratorMethod'
const setFeeToMethod = 'SetFeeTo'
const addProviderMethod = 'addProvider'
const changeReservesRatioMethod = 'changeReservesRatio'

const executeTransaction = 'execute'
const queueTransaction = 'queue'
const cancelTransaction = 'cancel'

module.exports = {
    methods: {
        setPendingAdminMethod,
        addPoolMethod,
        setPointMethod,
        transferOwnershipMethod,
        setMigratorMethod,
        setFeeToMethod,
        addProviderMethod,
        changeReservesRatioMethod
    },

    txTypes: {
        executeTransaction,
        queueTransaction,
        cancelTransaction
    },

    setMigrator: {
        migrator: "0x295E3331A35DD834EE76c305a8c3eD189A4Ac8Ae"
    },

    transferOwnership: {
        newOwner: '0x210ba3E10a59c6BC220B892e5d7A550151dEE2f4',
        contract: '0x8a2407b3ED86B51E713b31bfc6989A7cFaE46B53',
        sig: 'transferOwnership(address)'
    },

    setPendingAdmin: {
        pendingAdmin: keys.address.alice,
    },

    addProvider: {
        token: '0xA050886815CFc52a24B9C4aD044ca199990B6690',
        vault: '0x3B5483cDee2cF8C6e5B1598eF2cD9982659d307a'
    },

    changeReservesRatio: {
        token: '0xA050886815CFc52a24B9C4aD044ca199990B6690',
        reservesRatio: '10000'
    },

    setFeeTo: {
        feeTo: '0x3a979edf5c12092a6d5048b1849c2a32900fdfce'
    },

    addPool: {
        lpAddress: '0x96559937e9c4475160CA040b16cDA93E3EfBD75A',
        allocPoint: '500',
    },

    setAllocPoint: {
        pid: '22',
        allocPoint: '1000',
    },

    // sender : keys.address.bob,
    delay: 3, // in minutes, 3 min
    etaNumber: 1603716580,
};