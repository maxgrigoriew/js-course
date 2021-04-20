"use strict"

//  Задание 1

let lang = 'ru';
let arr = [];

//  Выход через if
if (lang == 'ru') {
    arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}

console.log(arr);
console.log(typeof arr);

// Вывод через switch

switch (lang) {
    case 'ru':
        arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        break;
    case 'en':
        arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        break;
}

console.log(arr);
console.log(typeof arr);

// Вывод через многомерный массив

arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
}
console.log(arr[lang]);
console.log(typeof arr);

// Задание 2

let namePerson = 'Максим';
namePerson = namePerson.toLowerCase();

namePerson == ('артем') ? console.log('Директор') :
    namePerson == ('максим') ? console.log('Предприниматель') :
    console.log('Студент');