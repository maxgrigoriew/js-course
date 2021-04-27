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
let expensesTitle = document.querySelector('.expenses-title');
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
        // значиние инпут Месячный доход
        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncome();
        appData.getBudget();
        appData.showResult();
    },
    // выводит результаты в поля
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = +appData.expensesMonth;
        // в поде возможные расходы вставляем значение и снова разбиваем на строку
        additonalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(',');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
    },
    // добавляющееся поле при клике на крестик
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    // поле обязательные расходы
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            // поле наименование
            let itemExpenses = item.querySelector('.expenses-title').value;
            // поле сумма
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
            let incomeTitle = item.querySelector('.income-title').value;
                console.log(incomeTitle);
            let incomeAmount = item.querySelector('.income-amount').value;
            console.log(incomeAmount);
            
            if (incomeTitle !== '' && incomeAmount !== '') {
                appData.income[incomeTitle] = incomeAmount;
            }
        })
        // перебираем все значения дополнительных заработков и сумируем значения
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    getIncomeBlock: function () {
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items')
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    // возможные расходы
    getAddExpenses: function () {
        // преобразуем в массив
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            // удаление пробелов в массиве
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        })
    },
    // поле дополнительные доходы
    getAddIncome: function () {
        additionalIncomeItems.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
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
    // поле дневной бюджет
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
    // селект расчета периода
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    }
};

function disabledTrue() {
    star.style.opacity = 0.1;
    star.style.cursor = 'default';
};
disabledTrue();

function disabledFalse() {
    star.style.opacity = 1;
    star.style.cursor = '';
};


star.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.getIncomeBlock);
periodSelect.addEventListener('input', function() {
    periodAmount.textContent = periodSelect.value;
});
salaryAmount.addEventListener('input', function() {
    if (salaryAmount.value) {
        return  disabledFalse();
    } else {
        return disabledTrue();
    }
});
