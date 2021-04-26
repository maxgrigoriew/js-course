'use strict';

let star = document.getElementById('start');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');
let depositCheckbox = document.querySelector('#deposit-check');
// let budgetDayValue = document.getElementsByClassName('result-total')[1];
let budgetDayValue = document.getElementsByClassName('budget_day-value');
let budgetMonthValue = document.querySelectorAll('.budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value');
let additonalIncomeValue = document.getElementsByClassName('additional_income-value');
let additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0];
let additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];
let additonalExpensesValue = document.getElementsByClassName('additional_expenses-value');
let additionalIncomeValue = document.getElementsByClassName('result-total')[3];
let additionalExpensesValue = document.getElementsByClassName('result-total')[4];
let incomePeriodValue = document.getElementsByClassName('income_period-value');
let targetMonthValue = document.getElementsByClassName('target_month-value');
// let targetMonthValue = document.getElementsByClassName('result-total')[6];
let expensesItems = document.querySelectorAll('.expenses-items');
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
// let expensesTitle = document.querySelector('.expenses-title');
// let expensesItem = document.querySelectorAll('.expenses-items');
let periodSelect = document.querySelector('.period-select');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodAmount = document.querySelector('.period-amount');
let checkDeposit = document.querySelector('#deposit-check');
let incomeItems = document.querySelectorAll('.income-items');
let buttonIncomeAdd = document.getElementsByTagName('button')[0];
let buttonExpensesAdd = document.getElementsByTagName('button')[1];


const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    expenses: {},
    income: {},
    addExpenses: 0,
    deposit: false,
    mission: 50000,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    period: 3,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function () {
        if (salaryAmount.value === "") {
              alert("Ошибка! Ваш месячный доход не является числом");
              return;
        }
        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getBudget();
        appData.showResult();
        // appData.getTargetMonth();
        // appData.getStatusIncome();
        // appData.getInfoDeposit();
        //   console.log(typeof salaryAmount.value);
        //   console.log(salaryAmount.value);
    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        
      },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            console.log(item);
           let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' || cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
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

    // getTargetMonth: function () {
    //     if (appData.budgetMonth <= 0) {
    //         console.log('Цель не будет достигнута');
    //     } else {
    //         let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
    //         console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
    //     }
    // },

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

star.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

appData.addExpensesBlock();


// console.log('expensesMonth: ', appData.expensesMonth);
// console.log('Наша программа включает в себя данные:');
// for (let item in appData) {
//     console.log('Свойство: ', item, ' Значение: ', appData[item]);
// }

// console.log(appData.addExpenses.join(', ').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));

console.log(budgetDayValue.value)