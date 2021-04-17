"use strict"

let lang = 'ru';

if (lang == 'ru') {

var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

}

if (lang == 'en') { arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

}

console.log(arr);




let namePerson = 'Максим';

if (namePerson == 'Максим') {
    console.log('Преподаватель');
}

else if (namePerson == 'Артем') {
    console.log('Директор');
}

else {
    console.log('студент');
}




switch (namePerson) {
    case 'Артем':
    console.log('Директор');
        break;
    case 'Максим':
        console.log('Преподаватель');
        break;
    default:
        console.log('Студент');
    
}



let arr2 = {
    'Артем': ['Директор'],
    'Максим': ['Преподаватель'],
};
console.log(arr2[namePerson])
