
"use strict"
 
let money = +prompt('Ваш месячный доход, руб', '20000');
let addExpenses = prompt('Перечислите Вашы возможные расходы за расчитываемый ериод через запятую. Пример: Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у Вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?', '5000');
let amount2 = +prompt('Во сколько это обойдется?', '5000');
let budgetDay = Math.floor(getAccumulateMonth() / 30);
let mission = +prompt('Какую сумму составляеть ваша цель?', '100000');
let months = Math.floor(mission / getAccumulateMonth());
let accumulateMonth = getAccumulateMonth();

function getExpensesMonth() {
    return amount1 + amount2;
}
console.log('Сумма расходов за месяц составляет: ' + getExpensesMonth());

function getAccumulateMonth() {
    return money - getExpensesMonth();
}

console.log( getAccumulateMonth());
console.log('Накопления за месяц составляют: ' + getAccumulateMonth());
console.log("Ваш бюджет за месяц: " + getAccumulateMonth() + " " + " руб");
function getTargetMonth() {
        return months
    }
getTargetMonth();
console.log('Ваша цель будет достигнута через: ' + getTargetMonth() + ' месяцев(-а)');
console.log('Ваш бюджет на день составляет:' + budgetDay + ' руб.');

let getStatusIncome = function () {
    if (budgetDay >= 12000) {
        return ('У Вас высокий уровень дохода');
    }
    else if (budgetDay < 1200 && budgetDay > 600) {
        return ('У Вас средний уровень дохода');
    }
    else if (budgetDay < 600 && budgetDay >=0) {
        return ('У Вас средний уровень дохода');
    }
    else {
        return ('Что то пошло не так');
    }
}
getStatusIncome();
console.log(getStatusIncome());

let showTypeof = function (data) {
    console.log('data: ', typeof(data))
}
showTypeof(money);
showTypeof(deposit);
showTypeof(addExpenses);
showTypeof(expenses1);
showTypeof(expenses2);
showTypeof(amount1);
showTypeof(amount2);



