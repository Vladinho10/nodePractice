'use strict';

buttonClick.addEventListener('click', ()=> {

	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:3000/book.json", false);
	xhr.send();

    let arr = JSON.parse(xhr.responseText);
	console.log(arr);

});


// inputText.addEventListener('input', ()=> {
	
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://localhost:3000/book.json", false);
//     xhr.send();

//     let arr = JSON.parse(xhr.responseText);
//     // console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         for (key in arr[i]) {

//             // if (arr[i].name.match(/inputText.value/i)) {
//              //    console.log(arr[i].name); break
// 			// }

// 			if (inputText.value[0]===)



// 		}
// 	}
// })

let str = 'Hello world O Henry';

let resArr = str.match(/o/gi);
console.log(resArr[0])


