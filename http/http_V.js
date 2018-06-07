const http = require('http');
const fs = require('fs');
const path = require('path');

const util = require('util');
const url = require('url');
const _port = 3000;

// http.createServer((req,res)=> {
// 	let myQuery = url.parse(req.url, false).query; // obj
// 	let temp = JSON.stringify(myQuery); // str json tipi
// 	console.log('**********');
// 	console.log(typeof myQuery);
// 	// let demo = JSON.parse(temp);
// 	// console.log(demo); // json string-y dardznum e obj

// 	res.end('Get params: ' +  temp) 
// }).listen(_port);

const server = http.createServer();

// server.on('request', (req, res)=>{
// 	res.end('server on');
// });

server.listen(_port);

// console.log(server);
console.log('*************************************');

server.on( 'request', (req, res)=>{
	if(req.url=='/') {
		let file_path = path.join(__dirname, 'test.html');

		fs.readFile(file_path, (err, data)=>{
			if (err) {
				console.log('apokalipsis');
			} else {
				res.setHeader('contentType', 'text/html');
				res.write(data.toString());
			}

			res.end();
		})
	// } else if (req.url=='/text') {

	// 	fs.readFile('/home/dinho/documents/nodeJsCourses/buildInModules/demo.txt', (err, data)=>{
	// 		if (err) {
	// 			console.log('apokalipsis 2');
	// 		} else {
	// 			res.setHeader('contentType', 'text/plain');
	// 			res.write(data.toString());
	// 		}

	// 		res.end();
	// 	})		
	// }

	} else if (req.url=='/t') {

		fs.readFile('../inUpDir.html', (err, data)=>{
			if (err) {
				console.log('apokalipsis 2');
			} else {
				res.setHeader('contentType', 'text/plain');
				res.write(data.toString());
			}

			res.end();
		})		
	}



})