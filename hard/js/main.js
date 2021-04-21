// "use strict"

let str = '              sdfdfsfsdfdfffffffffffffffffffffffffffffffffffff                     ';

let getString = function (str) {
    if (typeof (str) !== 'string') {
        alert('Введен неверный тип данных');
        return;
    } else {
        str = str.trim();
    }
    if (str.length > 30) {
        str = str.substring(0, 30) + '...';
    }
    return str;
};

console.log(getString(str));