"use strict"
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money, sumExpense;

let mission = +prompt('Какую сумму составляеть ваша цель?', '100000');

let start = function () {
    do {
        money = prompt('Ваш месячный доход, руб');
    }

    while (!isNumber(money));
};

start();

let appData = {
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function () {
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
    },
    getAccumulateMonth: function () {
        return money - appData.getExpensesMonth;
    },
    getTargetMonth: function () {
        let purpose = Math.floor(mission / appData.getAccumulateMonth);
        if (purpose < 0) {
            return 'Ваша цель не будет достигнута';
        } else {
            return 'Ваша цель будет достигнута через: ' + purpose + ' месяцев(-а)';
        }
    },
    getStatusIncome: function () {

        if (budgetDay >= 1200) {
            return ('У Вас высокий уровень дохода');
        } else if (budgetDay < 1200 && budgetDay >= 600) {
            return ('У Вас средний уровень дохода');
        } else if (budgetDay < 600 && budgetDay >= 0) {
            return ('У Вас низкий уровень дохода');
        } else {
            return ('Что то пошло не так');
        }
    },


}
let budgetDay = Math.floor(appData.getAccumulateMonth / 30);


let addExpenses = String(prompt('Перечислите Вашы возможные расходы за расчитываемый период через запятую. Пример: Квартплата, проездной, кредит'));

addExpenses = addExpenses.split(', ');


let deposit = confirm('Есть ли у Вас депозит в банке?');


let expenses = [];



appData.getTargetMonth();

appData.getExpensesMonth();

appData.getAccumulateMonth();

appData.getStatusIncome();




console.log('Сумма расходов за месяц составляет: ' + appData.getExpensesMonth());

console.log('Накопления за месяц составляют: ' + appData.getAccumulateMonth());

console.log("Ваш бюджет за месяц: " + appData.getAccumulateMonth() + " " + " руб");

console.log(appData.getTargetMonth());

console.log('Ваш бюджет на день составляет:' + budgetDay + ' руб.');

console.log(appData.getStatusIncome());