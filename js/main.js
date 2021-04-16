"use strict"


let money = +prompt('Ваш месячный доход, руб', '15000');

let addExpenses = String(prompt('Перечислите Вашы возможные расходы за расчитываемый период через запятую. Пример: Квартплата, проездной, кредит'));

addExpenses = addExpenses.split(', ');

let deposit = confirm('Есть ли у Вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');

let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов');

let amount2 = +prompt('Во сколько это обойдется?');

let mission = +prompt('Какую сумму составляеть ваша цель?', '555000');

let getExpensesMonth = function () {
    return amount1 + amount2;
}

let expensesMonth = getExpensesMonth();

let getAccumulateMonth = function () {
    return money - expensesMonth;
}

let accumulateMonth = getAccumulateMonth();

let budgetDay = Math.floor(accumulateMonth / 30);

let getTargetMonth = function(){
    return Math.floor(mission / accumulateMonth);
}

let targetMonth = getTargetMonth();

let getStatusIncome = function () {
     
     if (budgetDay >= 1200) {
    
          console.log('У Вас высокий уровень дохода');
     }
     else if (budgetDay < 1200 && budgetDay > 600) {
    
          console.log('У Вас средний уровень дохода');
     }
     else if (budgetDay < 600 && budgetDay >= 0) {
    
          console.log('У Вас средний уровень дохода');
     }
     else {
          console.log('Что то пошло не так');
     }
}


console.log(deposit);

console.log( addExpenses);

console.log(budgetDay);

console.log("Ваш бюджет за месяц: " + expensesMonth + " " + " руб");

console.log('Ваша цель будет достигнута через: ' + targetMonth + ' месяцев(-а)');

console.log('Ваш бюджет на день составляет:' + budgetDay + ' руб.');

let showTypeof = function (data) {
    console.log(data, typeof(data))
}

showTypeof(money);
showTypeof(deposit);
showTypeof(addExpenses);
showTypeof(expenses1);
showTypeof(expenses2);
showTypeof(amount1);
showTypeof(amount2);

