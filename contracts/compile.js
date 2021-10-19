// importing the path module
const path = require('path');

//importing the file system module
const fs = require('fs');

//importing the solidity complier module
const solc = require('solc');

//fetching the path of Drala.sol contract
const DralaPath = path.resolve(__dirname,'contracts','Drala.sol');

//reading the Drala.sol contract
const source = fs.readFileSync(DralaPath, 'utf8');

//compiling the Drala.sol contract and importing the abi,bytecode to make it available for other module
module.exports = solc.compile(source, 1.).contracts[':Drala'];
