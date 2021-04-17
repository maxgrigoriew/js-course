"use strict"
let isNumber = function (n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
}

let money, sumExpense;

let start = function () {
     do {
          money = prompt('Ваш месячный доход, руб');
     }
      
     while (!isNumber(money));
};

start();

let addExpenses = String(prompt('Перечислите Вашы возможные расходы за расчитываемый период через запятую. Пример: Квартплата, проездной, кредит'));

addExpenses = addExpenses.split(', ');


let deposit = confirm('Есть ли у Вас депозит в банке?');

let mission = +prompt('Какую сумму составляеть ваша цель?', '100000');

let expenses = [];

function getExpensesMonth() {
     let sum = 0;
     for (let i = 0; i < 2; i++) {
      expenses[i] = prompt("Введите обязательную статью расходов?");
    do {
      sumExpense = prompt(" Во сколько это обойдется?");
    } while (!isNumber(sumExpense));

    sum += +sumExpense;
  }
     
     console.log(sum);
     return sum;
}

let expensesMonth = getExpensesMonth();

let getAccumulateMonth = function() {
    return money - expensesMonth;
}

let accumulateMonth = getAccumulateMonth();

let getTargetMonth = function () {
     let purpose = Math.floor(mission / accumulateMonth);
     if (purpose < 0) {
          return 'Ваша цель не будет достигнута';
     }
     else {
          return 'Ваша цель будет достигнута через: ' + purpose + ' месяцев(-а)';
     }
}
let budgetDay = Math.floor(accumulateMonth / 30);
    
let getStatusIncome = function () {
     
    if (budgetDay >= 1200) {
        return ('У Вас высокий уровень дохода');
    }
    else if (budgetDay < 1200 && budgetDay >= 600) {
        return ('У Вас средний уровень дохода');
    }
    else if (budgetDay < 600 && budgetDay >=0) {
        return ('У Вас низкий уровень дохода');
    }
    else {
        return ('Что то пошло не так');
    }
}

getStatusIncome();

console.log('Сумма расходов за месяц составляет: ' + expensesMonth);

console.log('Накопления за месяц составляют: ' + accumulateMonth);

console.log("Ваш бюджет за месяц: " + accumulateMonth + " " + " руб");

console.log(getTargetMonth());

console.log('Ваш бюджет на день составляет:' + budgetDay + ' руб.');

console.log(getStatusIncome());

let showTypeof = function (data) {
    console.log(data, typeof(data))
}


showTypeof(money);

showTypeof(deposit);

showTypeof(addExpenses);
