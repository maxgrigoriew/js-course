'use strict';

let star = document.getElementById('start');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');
let depositCheckbox = document.querySelector('#deposit-check');
let budgetDayValue = document.querySelector('.budget_day-value');
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.querySelectorAll('.expenses_month-value')[0];
let additonalIncomeValue = document.querySelectorAll('additional_income-value');
let additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0];
let additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];
let additonalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let additionalIncomeValue = document.getElementsByClassName('result-total')[3];
let additionalExpensesValue = document.getElementsByClassName('result-total')[4];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let expensesItems = document.querySelectorAll('.expenses-items');
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let expensesTitle = document.querySelector('.expenses-title');
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
    addIncome: [],
    addExpenses: [],
    deposit: false,
    budget: 0,
    incomeMonth: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
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
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncome();
        appData.getBudget();
        appData.showResult();
    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = +appData.expensesMonth;
        additonalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(',');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
        console.log(expensesItems.value);
        return expensesItems;
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function () {
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
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function () {
        additionalIncomeItems.forEach(function (item){
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        })
    },

    getExpensesMonth: function () {
        let sum = 0;
        for (const item in appData.expenses) {
           sum += +appData.expenses[item];
        }
        appData.expensesMonth = sum;
    },
 

    getBudget: function () {
        let budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        let budgetDay = Math.floor(budgetMonth / 30);
        appData.budgetMonth = budgetMonth;
        appData.budgetDay = budgetDay;
    },

    getTargetMonth: function () {
            return targetAmount.value / appData.budgetMonth;
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

    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    }
};

star.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
