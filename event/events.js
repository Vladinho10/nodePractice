
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const _port = 3000;

// http.createServer((req,res)=>
//     res.end('node is rock in')).listen(_port);


const event = require("events");
const emitter = new event.EventEmitter;


// emitter.on('event', ()=>console.log('listen 1'));
// console.log('spitakner');
// emitter.on('event', ()=>console.log('listen 2'));
// console.log('spitakner 2');
// emitter.on('event', ()=>console.log('listen 3'));
// console.log('spitakner 3');

// emitter.emit('event')


// emitter.on('event', ()=>console.log('listen 1'));
// emitter.emit('event');
// console.log(5,6);
// console.log('spitakner');
// emitter.on('event', ()=>console.log('listen 2'));
// console.log('spitakner 2');
// emitter.on('event', ()=>console.log('listen 3'));
// console.log('spitakner 3');

for (let i = 0; i < 10; i++) { 
	(function(){
		let current = i;
		emitter.on('event', ()=>console.log(current));
	})();
}
emitter.emit('event');