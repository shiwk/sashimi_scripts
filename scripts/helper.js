const ethers = require('ethers');
const {_, time} = require('@openzeppelin/test-helpers');
const fs = require('fs');
const directory = './data';
const util = require('util');

const readFile = util.promisify(fs.readFile);


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
    fs.writeFile(directory + `/${file}.json`, json, 'utf8', (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}

async function readJson(file) {
    let data;
    await readFile(directory + `/${file}`, 'utf8').then((text) => {
        console.log("JSON data load.");
        data = text;
    }).catch((err) => {
        console.log('Error', err);
    });

    return JSON.parse(data);
}

module.exports = {
    encodeParameters: encodeParameters,
    latestBlockTime: latestBlockTIme,
    duration: duration,
    writeJson: writeJson,
    readJson: readJson
}