 "use strict"

// lesson03
// let  f = 4
// let question = confirm('Тебе есть 18 лет?');
// console.log(typeof question)

// let qustion2 = prompt('Сколько тебе лет?', '19');

// console.log(5 == '5');
// console.log( typeof String(11));
// console.log(typeof String(5 + 5));
// console.log(typeof Boolean('sdf'));
// console.log(typeof (Number ('10')));
// console.log(typeof (+'10'));
// let n = '10';
// n *= 1;
// console.log(typeof n);
// console.log(typeof parseInt('10dasd'));
// console.log(typeof parseFloat('10.33dasd'));

// let num = 4;
// if (num == 3) {
//     console.log('верно');
// }
// else {
//     console.log('неверно');
// }

// switch (num) {
//     case 3:
//         console.log(3);
//     case 4:
//         console.log(4);
//     case 5:
//         console.log(5);
// }

// let num2 = 3;
// switch (num2) {
//     case 3:
//     case 4:
//     case 5:
//         console.log('3-5');
// }

// let tern = 1;
// let result = tern === 1 ? 'true' : 'false';
// console.log('result:' + ' ' + result);

// Домашнее задание
let money = +prompt('Ваш месячный доход, руб', '15000');
console.log(typeof money);
// let addExpenses = prompt('Перечислите Вашы возможные расходы за расчитываемый ериод через запятую. Пример: Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у Вас депозит в банке?');
console.log(deposit);
let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let amount2 = +prompt('Во сколько это обойдется?');
let budgetMonth = money - amount1;
console.log("Ваш бюджет за месяц: " + budgetMonth + " " + " руб");
let mission = +prompt('Какую сумму составляеть ваша цель?', '555000');
let months = Math.floor(mission / budgetMonth);
console.log('Ваша цель будет достигнута через: ' + months + ' месяцев(-а)');
let budgetDay = Math.floor(budgetMonth / 30);
// console.log(budgetDay);
console.log('Ваш бюджет на день составляет:' + budgetDay + ' руб.');
if (budgetDay >= 12000) {
    console.log('У Вас высокий уровень дохода');
}
else if (budgetDay < 1200 && budgetDay > 600) {
    console.log('У Вас средний уровень дохода');
}
else if (budgetDay < 600 && budgetDay >=0) {
    console.log('У Вас средний уровень дохода');
}
else {
    console.log('Что то пошло не так');
}




