let http = require('http');
const _port = 3000;
const fs = require('fs');

let server = http.createServer((req, res)=>{

	if(req.url === '/') {
		res.writeHeader(200, {'Content-Type': 'text/html'});

		fs.readFile(__dirname+'/ajaxLessons.html', (err, data) =>  {
			const html = data.toString();
			res.write(html);
			res.end();
		});
	}

	if(req.url === '/test.html') {
		res.writeHeader(200, {'Content-Type': 'text/html'});

		fs.readFile(__dirname+'/test.html', (err, data) =>  {
			const test = data.toString();
			res.write(test);
			res.end();
		});
	}

    if(req.url === '/book.json') {
        res.writeHeader(200, {'Content-Type': 'application/json'});

        fs.readFile(__dirname+'/book.json', (err, data) =>  {
            const bookJSON = data.toString();
            res.write(bookJSON);
            res.end();
        });
    }

    if(req.url === '/ajaxLessons.js') {
        res.writeHeader(200, {'Content-Type': 'application/javascript'});

        fs.readFile(__dirname+'/ajaxLessons.js', (err, data) =>  {
            const ajaxLessons = data.toString();
            res.write(ajaxLessons);
            res.end();
        });
    }




}).listen(_port, ()=> console.log(
	'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv') );


// http.get('http://jsonplaceholder.typicode.com/posts', (req, res)=>{
// 	req.on('data', (chunk)=>{
// 		console.log('Chunk' + chunk);
// 	});
// 	server.on('request', (req, res)=>{
// 		res.end('this is server.on() method');
// 	});
// })