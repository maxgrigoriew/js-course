'use strict';

let booksColections = document.querySelector('.books');
let bookElem = document.querySelectorAll('.book');
let banner = document.querySelector('.adv');
let title = document.querySelector('.book:nth-child(5) a');
let listitemList2 = document.querySelectorAll('.book:nth-child(1) li');
let listitemList5 = document.querySelectorAll('.book:nth-child(6) li');
let listCollection = document.querySelector('.book:nth-child(3) ul');
let newItem = document.createElement('li');

booksColections.prepend(bookElem[1]);
booksColections.append(bookElem[2]);
bookElem[3].before(bookElem[4]);
document.body.style.backgroundImage = 'url("img/you-dont-know-js.jpg")';
banner.style.display = 'none';
listitemList2[3].after(listitemList2[6]);
listitemList2[6].after(listitemList2[8]);
listitemList2[10].before(listitemList2[2]);
listitemList5[4].after(listitemList5[2]);
listitemList5[8].before(listitemList5[5]);
listitemList5[3].before(listitemList5[9]);
title.innerText = '"Книга 3. this и Прототипы Объектов"';
newItem.textContent = 'Глава 8: За пределами ES6';
listCollection.append(newItem);