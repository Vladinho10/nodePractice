const http = require('http');
// const fs = require('fs');
// const path = require('path');
const util = require('util');
const _port = 8000;




// console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');

// let obj = {
//     h: 'hello',
//     age: 20
// };
//
// // ete %d-in string tanq, NaN kdarna
// let str = util.format('%s world!! I lived %d %% of my life', obj.h, obj.age);
//
// console.log(str);
//
// console.log('%j', obj); // json dardznel
//
// // console.log(util);
//
// console.time('from here');
//
// for (let a=0; a<1000000; a++){
//     a++;
// }
// console.timeEnd('from here');



// const repl = require('repl');

// console.log(repl);

// console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
// repl.start();


// let num = 0;
// repl.start().defineCommand('myCommand', {
//     action: () => {
//         console.log(num++)
//     }
// });

// repl.start('> qqq').context.numb = 5;
// repl.start().context.foo = (function(){
//     return num+5
// })();





// console.log(Buffer.alloc(3)); // <Buffer 00 00 00>
// // console.log(typeof Buffer.alloc(3)); // object
// console.log(Buffer.alloc(3).length); // 3


// for (let key in Buffer.alloc(1)) {
//     console.log('vvv');
//     console.log(key + '  ' + Buffer.alloc()[key] )
// }

// console.log(Buffer.byteLength('vlad and you')); // 12 byte-eri qanak

// let a = Buffer.from([187, 170, 255, 256, 'aaa']);
// console.log(a); // 256 - 00
// console.log(typeof a); // object - array
// console.log(a[0]); // 187



// let b = Buffer.from('a', 'utf8');
// console.log(Buffer.from('a', 'utf8')); // 61
// console.log(Buffer.from('a', 'ascii')); // 61
// console.log(Buffer.from('a', 'binary')); // 61
// console.log(Buffer.from('word', 'utf8')); // 61

// console.log('vlad'.indexOf('a')); // 61

let arrUint = new Uint16Array(3);
console.log(arrUint); // Uint16Array [0, 0, 0]
// console.log(arrUint.length); // 3

// console.log(arrUint.buffer); // arrayBuffer { byteLength: 6 }

let buffObj = Buffer.from(arrUint.buffer); // Uint array-argument
console.log(buffObj); //  <Buffer 00 00 00 00 00 00>,

// let arr = [0, 0, 0];
// let demo = Buffer.from(arr.buffer); //
// console.log(demo); //  error



console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
console.log(Buffer.alloc(6)); // <Buffer 00 00 00 00 00 00>

// console.log(Buffer.from(arrUint.buffer)===Buffer.alloc(6)); //  false

// console.log(Buffer.alloc(1).toString()===Buffer.alloc(1).toString()); //  true

console.log( buffObj.write('asd') ); // char-eri (byte-eri) qanak
console.log( buffObj.write('asd').toString() );




