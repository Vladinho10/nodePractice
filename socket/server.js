// const fs = require('fs');
const path = require('path');
// const url = require('url');


const app = require('express')();
const server = require('http').Server(app);
const _port = 3000;

const io = require('socket.io')(server);


app.get('/', function(req, res){

res.sendFile(__dirname + '/view/index.html');


});



const namespace = io.of('/namespace');
var room = '';
namespace.on('connection', (socket)=>{
	socket.on('btn_click', (data)=>{
		if(data.btn===1){
			room = "joined Room1";
			socket.join(room);
			socket.emit('room_join', {roomName: 1})
		}
		else if(data.btn===2){
			room = "joined Room2";
			socket.join(room);
			socket.emit('room_join', {roomName: 2})
		}
	})
})
























// io.on('connection', (socket)=>{
// 	//greeting-y event e karot e vzgo exni

// 	socket.on('news', (data)=> {
//   		console.log(data.message);
//   		socket.disconnect(); // hatuk kapy ktrelu hamar
//   	});

// 	socket.emit('greeting', {message: "user connected"});




	// socket.on('vzgo', (data)=> {
 //  		console.log(data.message)
 //  	});

	// socket.emit('greeting', {message: "hello from Server"})
// });



server.listen(_port, function(){
  console.log('listening on *:3000');
});