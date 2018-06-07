'use strict';

console.log('hello js');
// let table = document.querySelector('.table');
let edit = document.createElement('button');
let del = document.createElement('button');
let span = document.createElement('span');
demo.appendChild(edit);
// span.appendChild(del);

function getTable() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/getTable', true);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      demo.innerHTML = xhr.responseText;
      console.log(this.responseText); //string
  //     let resText = JSON.parse(this.responseText); //array
  //     if (table.style.display != 'block') {
        // table.style.display = 'block';
  //       for (let i = 0; i <= resText.length; i++) {
  //         let tr = document.createElement('tr');
  //         for (let key in resText[i]) {
  //           let td = document.createElement('td');
  //           if (key != '_id') {
  //             td.innerHTML = resText[i][key];
  //             tr.appendChild(td);
  //           }
  //
  //         }
  //
  //         tbody.appendChild(tr)
  //       }
  //     }
    }
  }
  xhr.send()
}

function func(number) {
  console.log(number);
}

getUser.addEventListener('click', getTable)
