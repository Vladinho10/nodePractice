const http = require('http');
const fs = require('fs');
const util = require('util');
const url = require('url');
const _port = 3000;


console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
let href = 'https://nodejs.org/dist/latest-v8.x/docs/api/url.html#url_url'
let hrefParsed = url.parse(href);
// console.log(hrefParsed);
// console.log(hrefParsed.port);



// console.log( url.parse('https://www.facebook.com/mikael.alimyan?ref=bookmarks') ):

// let resolvedUrl = url.resolve(
//     'https://www.facebook.com/mikael.alimyan?ref=bookmarks#url_url', '#myHash');
// console.log(resolvedUrl);
// let resolvedUrl2 = url.resolve(
//     'https://www.facebook.com/mikael.alimyan?ref=bookmarks#url_url', '?name');
// console.log(resolvedUrl2);
// let resolvedUrl3 = url.resolve(
//     'https://www.facebook.com/mikael.alimyan?ref=bookmarks#url_url', '/eva'); // com-ic heto
// console.log(resolvedUrl3);
// let resolvedUrl4 = url.resolve(
//     'https://www.facebook.com/mikael.alimyan?ref=bookmarks#url_url', '=123'); // com-ic heto
// console.log(resolvedUrl4);
// let resolvedUrl5 = url.resolve(
//     'https://www.facebook.com/mikael.alimyan?ref=bookmarks#url_url', '://www.google.ru'); // com-ic heto
// console.log(resolvedUrl5);

const URL  = url.URL;
const myURL = new URL('https://www.facebook.com/mikael.alimyan?ref=bookmarks#url_url');
console.log(myURL);
console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
// hrefParsed = url.parse('https://www.facebook.com/mikael.alimyan?ref=bookmarks#url_url');
// console.log(hrefParsed);

let temp = myURL.searchParams;
console.log(temp);
for (let key in temp) {
    console.log( temp[key])
}

console.log(temp.get('ref'));

console.log(temp.append('surname', 'Green'));
console.log(myURL);

temp.delete('ref');
console.log(myURL);
console.log(temp.set('name', 'Eva'));
console.log(myURL);
 





