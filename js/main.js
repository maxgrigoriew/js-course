'use strict';

let start = document.getElementById('start');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');
let depositCheckbox = document.querySelector('#deposit-check');
let budgetDayValue = document.getElementsByClassName('result-total')[1];
let budgetDayValue = document.getElementsByClassName('budget_day-value');
let budgetMonthValue = document.querySelector('.budget_month-value');
let expensesMonthValue = document.getElementsByClassName('result-total')[2];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value');
let additonalIncomeValue = document.getElementsByClassName('additional_income-value');
let additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0];
let additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];
let additonalExpensesValue = document.getElementsByClassName('additional_expenses-value');
let additionalIncomeValue = document.getElementsByClassName('result-total')[3];
let additionalExpensesValue = document.getElementsByClassName('result-total')[4];
let incomePeriodValue = document.getElementsByClassName('income_period-value');
let targetMonthValue = document.getElementsByClassName('result-total')[6];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let periodSelect = document.querySelector('.period-select');

let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodAmount = document.querySelector('.period-amount');
let checkDeposit = document.querySelector('#deposit-check');

let incomeItems = document.querySelectorAll('.income-items');

let buttonIncomeAdd = document.getElementsByTagName('button')[0];
let buttonExpensesAdd = document.getElementsByTagName('button')[1];

let incomePeriodValue = document.getElementsByClassName('result-total')[5];


let targetMonthValue = document.getElementsByClassName('target_month-value');

console.log(bunnonStart);
console.log(buttonIncome);
console.log(buttonExpenses);
console.log(checkboxDeposit);
console.log(additionalIncomeItem1);
console.log(additionalIncomeItem2);
console.log(budgetDayValue);
console.log(expensesMonthValue);
console.log(additonalIncomeValue);
console.log(additonalExpensesValue);
console.log(incomePeriodValue);
console.log(targetMonthValue);


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


console.log('expensesMonth: ', appData.expensesMonth);
console.log('Наша программа включает в себя данные:');
for (let item in appData) {
    console.log('Свойство: ', item, ' Значение: ', appData[item]);
}

console.log(appData.addExpenses.join(', ').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));