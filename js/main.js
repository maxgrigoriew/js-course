'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function () {
        do {
            money = prompt('Ваш месячный доход?');
        } while (!isNumber(money));

    };

start();

let appData = {
    expenses: {},
    income: {},
    addExpenses: 0,
    deposit: false,
    mission: 50000,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    period: 3,
    percentDeposit: 0,
    moneyDeposit: 0,

    asking: function () {

        if (confirm('Есть ли у Вас дополнительный источник заработка?')) {
            let itemIncome;
            do {
                itemIncome = prompt('какой у Вас допольнительный зароботок?', 'Таксую');
            }
            while (isNumber(itemIncome));
            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом заработаете?', '10000');
            }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;

        }
        do {
            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLowerCase().split(', ');
        }
        while (isNumber(appData.addExpenses));

        appData.deposit = confirm('Есть ли у Вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let expensesName;
            do {
                expensesName = prompt('Введите обязательную статью расходов');
            }
            while (isNumber(expensesName));

            let expensesValue;
            do {
                expensesValue = prompt('Во сколько эта статья обойдется?');
            }
            while (!isNumber(expensesValue));
            appData.expenses[expensesName] = +expensesValue;
        }
    },

    getExpensesMonth: function () {
        let sum = 0;
        for (const item in appData.expenses) {
            sum += appData.expenses[item];
        }
        appData.expensesMonth = sum;
    },

    getBudget: function () {
        let budgetMonth = appData.budget - appData.expensesMonth;
        let budgetDay = Math.floor(budgetMonth / 30);
        appData.budgetMonth = budgetMonth;
        appData.budgetDay = budgetDay;
    },

    getTargetMonth: function () {
        if (appData.budgetMonth <= 0) {
            console.log('Цель не будет достигнута');
        } else {
            let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
            console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
        }
    },

    getStatusIncome: function () {
        if (appData.budgetDay > 1200) {
            console.log('У Вас высокий уровень дохода');
        } else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
            console.log('У Вас средний уровень дохода');
        } else if (appData.budgetDay > 0 && appData.budgetDay <= 600) {
            console.log('У Вас низкий уровень дохода');
        } else {
            console.log('Что то пошло не так');
        }
    },

    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            while (!isNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt('Какая сумма задожена?');
            }
            while (!isNumber(appData.moneyDeposit));
        };
    },

    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();


for (let item in appData) {
    console.log('Свойство: ', item, ' Значение: ', appData[item]);
}

console.log('expensesMonth: ', appData.expensesMonth);
console.log('Наша программа включает в себя данные:');
console.log(appData.addExpenses.join(', ').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
// console.log(appData.income);