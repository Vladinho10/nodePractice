let http = require('http');
const _port = 3000;
const fs = require('fs');
const myChild = require('./myChild');
const son = require('./son');



http.createServer((req, res)=>{
	res.write('Hello NodeJs')
	res.end();

}).listen(_port, ()=> console.log(
	'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv') );

