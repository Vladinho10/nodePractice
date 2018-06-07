const http = require('http');
// const fs = require('fs');
const path = require('path');
const _port = 3000;

http.createServer((req,res)=>
    res.end('node is rock in')).listen(_port);

// // procesneri masin info
// console.log(process);

// // run anox u run linox
// console.log(process.argv); 

// console.log(process.platform);

// console.log(process.env); 

// console.log(require);
// console.log(require.cache);

// console.log(global.console)
// console.log(global.process)

// console.log(global.require) // undefined
// console.log(global.__dirname) // undefined
// console.log(global.global==global) // true

// console.log(__dirname);
// console.log(__filename);



// console.log(process.execPath); //node-i path
