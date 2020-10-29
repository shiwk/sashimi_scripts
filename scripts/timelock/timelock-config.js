const keys = require("../../keys");

const setPendingAdmin = 'setPendingAdmin'
const addPool = 'addPool'
const setPoint = 'setPoint'
const transferOwnership = 'transferOwnership'
const setMigrator = 'setMigrator'
const setFeeTo = 'setFeeTo'
const addProvider = 'addProvider'
const changeReservesRatio = 'changeReservesRatio'

const executeTransaction = 'execute'
const queueTransaction = 'queue'
const cancelTransaction = 'cancel'

module.exports = {
    methods: {
        setPendingAdminMethod : {
            name : setPendingAdmin,
            sig : ''
        },
        addPoolMethod :{
            name : addPool,
            sig : 'add(uint256,address,bool)'
        },
        setPointMethod : {
            name : setPoint,
            sig : 'set(uint256,uint256,bool)'
        },
        transferOwnershipMethod :{
            name :transferOwnership,
            sig : 'transferOwnership(address)'
        },
        setMigratorMethod : {
            name :setMigrator
        },
        setFeeToMethod : {
            name : setFeeTo
        },
        addProviderMethod : {
            name : addProvider
        },
        changeReservesRatioMethod : {
            changeReservesRatio : changeReservesRatio
        }
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
        lpToken: '0x96559937e9c4475160CA040b16cDA93E3EfBD75A',
        allocPoint: '500',
    },

    setAllocPoint: {
        pid: '1',
        allocPoint: '1000',
    },

    // sender : keys.address.bob,
    delay: 3, // in minutes, 3 min
    etaNumber: 1603776588,
};