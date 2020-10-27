const info = require('./info.json');

module.exports = {
    keys: {
        ALICE: info.keys.ALICE,
        JAMES: info.keys.JAMES,
        JACK: info.keys.JACK,
        LISA: info.keys.LISA
    },
    address: {
        alice: info.addresses.alice,
        jack: info.addresses.jack,
        lisa: info.addresses.lisa
    },
    privateKeys: [info.keys.ALICE, info.keys.JAMES, info.keys.JACK, info.keys.LISA]
}