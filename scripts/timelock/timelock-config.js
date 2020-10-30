const keys = require("../../keys");
const executeTransaction = 'execute'
const queueTransaction = 'queue'
const cancelTransaction = 'cancel'

module.exports = {
    txTypes: {
        executeTransaction,
        queueTransaction,
        cancelTransaction
    },

    admin: {
        kovan: keys.address.alice,
        mainnet: keys.address.bob
    },

};