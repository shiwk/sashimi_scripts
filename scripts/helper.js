const ethers = require('ethers');
const {_, time} = require('@openzeppelin/test-helpers');

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

module.exports ={
    encodeParameters : encodeParameters,
    latestBlockTIme : latestBlockTIme,
    duration : duration
}