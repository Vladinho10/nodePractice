const http = require('http');
// const fs = require('fs');
const path = require('path');
const _port = 3000;

http.createServer((req,res)=>
    res.end('node is rock in')).listen(_port);



// console.log(path);
console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
// let a = 'hello';
// let b = 'path';
// let c = 'something';
// console.log(path.join(a,b,c))

// console.log(path.basename('sevak/vardan/mart.anasun'));

// console.log(path.resolve('sevak/vardan/mart.anasun'));

// console.log(path.extname('sevak/vardan/mart.anasun'));

// console.log(path.parse('sevak/vardan/mart.anasun'));

// let obj = {
// 	a: 'tikin',
// 	b: 'bab',
// 	c: 'city',
// 	d: 'drakula',
// 	e: 'Erevan' 
// }
// console.log(path.format(obj)); // datark string

// let obj = {
// 	dir: 'tikin',
// 	root: 'bab',
// 	ext: 'city',
// 	base: 'drakula.ape',
// 	ename: 'Erevan' 
// }
// console.log(path.format(obj)); // 

// console.log(process.execPath); //node-i path
