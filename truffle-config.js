const HDWalletProvider = require("truffle-hdwallet-provider");
const keys = require("./keys");
const providers = require('./providers');
const info = require('./info.json');

module.exports = {

    networks: {
        development: {
            host: "127.0.0.1",
            network_id: "*",
            port: 7245,
            gas: 4000000,
            gasPrice: 10000000000, // 10 gwei
        },

        kovan: {
            provider: function () {
                return new HDWalletProvider(keys.privateKeys, providers.kovan, 0, keys.privateKeys.length)
            },
            network_id: 42,
            gas: 10000000,
            gasPrice : 10000000000, //10 GWei
            networkCheckTimeout: 10000000
        },

        mainnet: {
            provider: function () {
                return new HDWalletProvider(keys.privateKeys, providers.mainnet, 0,keys.privateKeys.length)
            },
            network_id: 1,
            gas: 200000,
            gasPrice : 160000000000, //160 GWei
        }
    },
    mocha: {
        enableTimeouts: false
    },
    compilers: {
        solc: {
            version: "0.6.12"
        }
    },
    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
        etherscan: info.api_etherscan
    }
};