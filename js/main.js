'use strict';

let startBtn = document.getElementById('start');
let cancelBtn = document.querySelector('#cancel');
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
let inputs = document.querySelectorAll('.data input[type="text"]');
let resultInputs = document.querySelectorAll('.result input[type="text"]');

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
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getIncome();
        this.getBudget();
        this.showResult();
        
        startBtn.style.display = 'none';
        cancelBtn.style.display = 'block';
        cancelBtn.addEventListener('click', appData.reset.bind(appData));
        this.blockItems();
    },
    
    reset: function () {
        this.unBlockItems();
        this.cleanInputs();
        startBtn.style.display = 'block';
        cancelBtn.style.display = 'none';
    },
    
    blockItems: function () {
        inputs.forEach(function (item) {
        appData.setDisabled(item);
        });
        
        let expensesItem = document.querySelectorAll('.expenses-items input');
        expensesItem.forEach(item => {
        appData.setDisabled(item);
        });

        let incomeItem = document.querySelectorAll('.income-items input');
        incomeItem.forEach(item => {
        appData.setDisabled(item);
        });
        
        appData.setDisabled(btnPlus);
        appData.setDisabled(incomePlus);
        appData.setDisabled(expensesPlus);
        appData.setDisabled(depositCheckbox);
        appData.setDisabled(periodSelect);
    },

    unBlockItems: function () {
        inputs.forEach(item => {
        appData.unsetDisabled(item);
        });
        
        appData.unsetDisabled(btnPlus);
        appData.unsetDisabled(incomePlus);
        appData.unsetDisabled(expensesPlus);
        appData.unsetDisabled(depositCheckbox);
        appData.unsetDisabled(periodSelect);
    },
    
    setDisabled: function (element) {
        element.disabled = true;
     },
    
    unsetDisabled: function(element){
        element.disabled = false;
    },
    
    cleanInputs: function () {
        periodSelect.value = 1;
        periodAmount.textContent = 1;

        inputs.forEach(item => {
            item.value = '';
        });

        resultInputs.forEach(item => {
            item.value = '';
        });
     },
    // выводит результаты в поля
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = +this.expensesMonth;
        // в поде возможные расходы вставляем значение и снова разбиваем на строку
        additonalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(',');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        
        let that = this;
        periodSelect.addEventListener('input', function () {
            incomePeriodValue.value = that.calcPeriod();
        });
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
        expensesItems.forEach((item) => {
            // поле наименование
            let itemExpenses = item.querySelector('.expenses-title').value;
            // поле сумма
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    // поле дополнительный доход
    getIncome: function () {
        incomeItems.forEach((item) => {
            let incomeTitle = item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;
            
            if (incomeTitle !== '' && incomeAmount !== '') {
                this.income[incomeTitle] = incomeAmount;
            }
        });
        // перебираем все значения дополнительных заработков и сумируем значения
        for (let key in this.income){
            this.incomeMonth += +this.income[key];
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
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        })
    },
    // поле дополнительные доходы
    getAddIncome: function () {
        additionalIncomeItems.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (const item in this.expenses) {
           sum += +this.expenses[item];
        }
        this.expensesMonth = sum;
    },

    getBudget: function () {
        let budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        let budgetDay = Math.floor(budgetMonth / 30);
        this.budgetMonth = budgetMonth;
        this.budgetDay = budgetDay;
    },
    // поле дневной бюджет
    getTargetMonth: function () {
            return targetAmount.value / this.budgetMonth;
    },

    getStatusIncome: function () {
        if (this.budgetDay > 1200) {
            console.log('У Вас высокий уровень дохода');
        } else if (this.budgetDay > 600 && this.budgetDay <= 1200) {
            console.log('У Вас средний уровень дохода');
        } else if (this.budgetDay > 0 && this.budgetDay <= 600) {
            console.log('У Вас низкий уровень дохода');
        } else {
            console.log('Что то пошло не так');
        }
    },

    getInfoDeposit: function () {
        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            while (!isNumber(this.percentDeposit));
            do {
                this.moneyDeposit = prompt('Какая сумма задожена?');
            }
            while (!isNumber(this.moneyDeposit));
        }
    },
    // селект расчета периода
     calcPeriod: function () {
        return this.budgetMonth * periodSelect.value;
    },
     
    disabledTrue: function() {
    startBtn.style.opacity = 0.1;
    startBtn.style.cursor = 'default';
    startBtn.disabled = true;
    },

    disabledFalse: function () {
        startBtn.style.opacity = 1;
        startBtn.style.cursor = '';
        startBtn.disabled = false;
    },
};

appData.disabledTrue();

startBtn.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
incomePlus.addEventListener('click', appData.getIncomeBlock.bind(appData));

periodSelect.addEventListener('input', function() {
    periodAmount.textContent = periodSelect.value;
});

salaryAmount.addEventListener('input', function() {
    if (!isNumber(salaryAmount.value)) {
        return  appData.disabledTrue.bind(appData)();
    } else {
        return appData.disabledFalse.bind(appData)();
    }
});
