# Batch Timelock Scripts

## Prerequisite

Specify your timelock `admin` in [timelock-config.js](./timelock-config.js).

## Queue
Edit [kovan.js](./batch/kovan.js) or [mainnet.js](./batch/mainnet.js) with data you want before sending `queue` transactions.

```truffle exec scripts/timelock/timelock-batch.js --network kovan --type queue```

Specify the network type as you need.

A new json file named with timestamp would be created in [data](../../data) after sending `queue` transactions, like `2020-10-30T13:18:33.795Z.json`

NOTE: Keep this file until you send `execute` txs.

## Execute
Make sure the json file from `queue` exists in [data](../../data). With file `2020-10-30T13:18:33.795Z.json`, 

```truffle exec scripts/timelock/timelock-batch.js --network kovan --type execute --data 2020-10-30T13:01:17.023Z.json```

Specify the network type as you need, while it should be the same as the type you use for `queue`.
