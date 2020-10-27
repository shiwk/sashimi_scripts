const ethers = require('ethers');
const {_, time} = require('@openzeppelin/test-helpers');
var fs = require('fs');

function encodeParameters(types, values) {
    const abi = new ethers.utils.AbiCoder();
    try {
        return abi.encode(types, values);
    } catch (e) {
        console.log(e);
    }
}

async function latestBlockTIme(web3) {
    const block = await web3.eth.getBlock('latest');
    return new web3.utils.BN(block.timestamp);
}

function duration(delay) {
    return time.duration.minutes(delay);
}

async function writeJson(file, obj) {
    let json = JSON.stringify(obj);
    fs.writeFile(`./output/${file.toString()}.json`, json, 'utf8', (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}

async function readJson(file) {
    let data = fs.readFileSync(`./output/${file}.json`, 'utf8');
    console.log("JSON data load.");
    return JSON.parse(data);
}

module.exports = {
    encodeParameters: encodeParameters,
    latestBlockTime: latestBlockTIme,
    duration: duration,
    writeJson: writeJson,
    readJson : readJson
}