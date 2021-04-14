"use strict"


let money = +prompt('Ваш месячный доход, руб', '15000');

let addExpenses = .split(prompt('Перечислите Вашы возможные расходы за расчитываемый ериод через запятую. Пример: Квартплата, проездной, кредит'));

let deposit = confirm('Есть ли у Вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');

let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов');

let amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 -amount2;

let mission = +prompt('Какую сумму составляеть ваша цель?', '555000');

let months = Math.floor(mission / budgetMonth);

let budgetDay = Math.floor(budgetMonth / 30);



if (budgetDay >= 1200) {
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


console.log(deposit);
console.log(addExpenses);

console.log("Ваш бюджет за месяц: " + budgetMonth + " " + " руб");

console.log('Ваша цель будет достигнута через: ' + months + ' месяцев(-а)');

console.log(typeof money);

console.log(budgetDay);

console.log('Ваш бюджет на день составляет:' + budgetDay + ' руб.');