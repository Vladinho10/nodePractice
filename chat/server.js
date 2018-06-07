// const fs = require('fs');
const path = require('path');
// const url = require('url');
const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const _port = 3000;
const io = require('socket.io')(server);

app.use(express.static( path.join(__dirname, '/view')) );

app.get('/', function(req, res){
	res.sendFile(__dirname + '/view/index.html');
});


io.on('connection', (socket)=>{

	socket.on('frontChat', (data)=> {
		console.log(data)
		socket.emit('backChat', data);
  	});

	




	socket.on('vzgo', (data)=> {
  		console.log(data.message)
  	});

	socket.emit('greeting', {message: "hello from Server"})
});







// const namespace = io.of('/namespace');
// var room = '';
// namespace.on('connection', (socket)=>{
// 	socket.on('btn_click', (data)=>{
// 		if(data.btn===1){
// 			room = "joined Room1";
// 			socket.join(room);
// 			socket.emit('room_join', {roomName: 1})
// 		}
// 		else if(data.btn===2){
// 			room = "joined Room2";
// 			socket.join(room);
// 			socket.emit('room_join', {roomName: 2})
// 		}
// 	})
// })





























server.listen(_port, function(){
	let = addressObj = server.address();
	console.log(addressObj.address);
});


