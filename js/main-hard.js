"use strict"

let num = 266219;
let str = num.toString().split('');
let total = 1;

for (let i = 0; i < str.length; ++i) {
total *= str[i];
console.log(total);
}

let dergeTotal = total ** 3


console.log(dergeTotal);
dergeTotal = dergeTotal.toString()
console.log(dergeTotal.substring(0, 2));