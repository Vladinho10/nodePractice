const http = require('http');
const fs = require('fs');
// const path = require('path');
// const util = require('util');
const _port = 3000;

// http.createServer((req,res)=>
//
//     res.end('node is rock in')).listen(_port);


console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');



fs.open('tempo.js', 'r', (err, fileDescriptor)=>{
    if(err) {
        console.log(err)
    } else {
        // console.log(fileDescriptor);
    }
});


// fs.write(1,
//        'hello world',
//         {encoding: 'utf-8'},
//         (err, bytesWritten, secondArg)=>{
//             if(err) {
//                 console.log(err)
//             } else {
//                 // console.log(bytesWritten);
//                 console.log(secondArg);
//             }
// });


fs.writeFile('writeFile.txt', 'This is writeFlie.txt context', (err)=>{
        if(err) throw err;
    });


// fs.exists('demo.txt', (ex)=>{
//     if(ex) {
//         console.log("yes it's exists")
//     };
// });

fs.readFile('demo.txt', (err, data)=>console.log( data.toString() ) );


// fs.readFile('/home/dinho/documents/nodeLessons/saveByREPL.js', (err, data)=>console.log( data.toString() ) );

fs.readdir('/home/dinho/documents/nodeLessons/buildInModules', (err, fileNamesArray)=>console.log( fileNamesArray ) );
