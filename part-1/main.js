let money = 50000;
let income = 'web development';
let addExpenses = 'Продукты, Такси, Развлечения';
let deposit = true;
let mission = 100000;
let period = 7;

console.log(typeof income);
console.log(typeof mission);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = Math.floor(money / 30);
console.log(budgetDay);

