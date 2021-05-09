'use strict';

const startBtn = document.getElementById('start');
const cancelBtn = document.querySelector('#cancel');
const btnPlus = document.getElementsByTagName('button');
const incomePlus = btnPlus[0];
const expensesPlus = btnPlus[1];
const additionalIncomeItems = document.querySelectorAll('.additional_income-item');
const depositCheckbox = document.querySelector('#deposit-check');
const budgetDayValue = document.querySelector('.budget_day-value');
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const expensesMonthValue = document.querySelectorAll('.expenses_month-value')[0];
const additonalIncomeValue = document.querySelectorAll('additional_income-value');
const additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0];
const additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];
const additonalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const additionalIncomeValue = document.getElementsByClassName('result-total')[3];
const additionalExpensesValue = document.getElementsByClassName('result-total')[4];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let expensesItems = document.querySelectorAll('.expenses-items');
const salaryAmount = document.querySelector('.salary-amount');
const expensesTitle = document.querySelector('.expenses-title');
const periodSelect = document.querySelector('.period-select');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodAmount = document.querySelector('.period-amount');
const checkDeposit = document.querySelector('#deposit-check');
let incomeItems = document.querySelectorAll('.income-items');
const buttonIncomeAdd = document.getElementsByTagName('button')[0];
const buttonExpensesAdd = document.getElementsByTagName('button')[1];
const inputs = document.querySelectorAll('.data input[type="text"]');
const resultInputs = document.querySelectorAll('.result input[type="text"]');

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const AppData = function () {
    this.income = {};
    this.expenses = {};
    this.addIncome = [];
    this.addExpenses = [];
    this.deposit = false;
    this.budget = 0;
    this.incomeMonth = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
};
console.log(AppData);

AppData.prototype.start = function () {
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
};

AppData.prototype.reset = function () {
    this.unBlockItems();
    this.cleanInputs();
    this.delAddInputs();
    startBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
};

AppData.prototype.blockItems = function () {
    inputs.forEach(function (item) {
        appData.setDisabled(item);
    });
        
    const expensesItem = document.querySelectorAll('.expenses-items input');
    expensesItem.forEach(item => {
        appData.setDisabled(item);
    });

    const incomeItem = document.querySelectorAll('.income-items input');
    incomeItem.forEach(item => {
        appData.setDisabled(item);
    });
        
    this.setDisabled(btnPlus);
    this.setDisabled(incomePlus);
    this.setDisabled(expensesPlus);
    this.setDisabled(depositCheckbox);
    // this.setDisabled(periodSelect);
};

    AppData.prototype.unBlockItems = function () {
    inputs.forEach(item => {
        appData.unsetDisabled(item);
    });
    
    const expensesItem = document.querySelectorAll('.expenses-items input');
    expensesItem.forEach(item => {
        appData.unsetDisabled(item);
    });

    const incomeItem = document.querySelectorAll('.income-items input');
    incomeItem.forEach(item => {
        appData.unsetDisabled(item);
    });
    
    this.unsetDisabled(btnPlus);
    this.unsetDisabled(incomeItem);
    this.unsetDisabled(expensesItem);
    this.unsetDisabled(expensesPlus);
    this.unsetDisabled(depositCheckbox);
    this.unsetDisabled(incomePlus);
    // this.unsetDisabled(periodSelect);
};
    
AppData.prototype.setDisabled = function (element) {
    element.disabled = true;
};
    
AppData.prototype.unsetDisabled = function (element) {
    element.disabled = false;
};
    
AppData.prototype.cleanInputs = function () {
    periodSelect.value = 1;
    periodAmount.textContent = 1;

    inputs.forEach(item => {
        item.value = '';
    });

    resultInputs.forEach(item => {
        item.value = '';
});
};
    
AppData.prototype.delAddInputs = function () {
    if (expensesItems.length > 1) {
        const expensesItem = expensesItems[0].cloneNode(true);
        this.resetExpensesInputs(expensesItem);

        expensesItems.forEach(item => {
            item.parentNode.removeChild(item);
        });

        expensesPlus.parentNode.insertBefore(expensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesPlus.hasAttribute('style')) {
            expensesPlus.style.display = 'block';
        }
    };

    if (incomeItems.length > 1) {
        const incomeItem = incomeItems[0].cloneNode(true);
        this.resetIncomeInputs(incomeItem);

        incomeItems.forEach(item => {
            item.parentNode.removeChild(item);
        });

        incomePlus.parentNode.insertBefore(incomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomePlus.hasAttribute('style')) {
            incomePlus.style.display = 'block';
        }
    };
};
    
AppData.prototype.resetExpensesInputs = function (cloneExpensesItems) {
    const cloneExpensesInputs = cloneExpensesItems.querySelectorAll('input');

    cloneExpensesInputs.forEach((item) => {
        item.value = '';
    });
};

    AppData.prototype.resetIncomeInputs = function (cloneIncomeItems) {
    const cloneIncomeInputs = cloneIncomeItems.querySelectorAll('input');

    cloneIncomeInputs.forEach((item) => {
    item.value = '';
    });
};
    // выводит результаты в поля
AppData.prototype.showResult = function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = +this.expensesMonth;
    // в поде возможные расходы вставляем значение и снова разбиваем на строку
    additonalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(',');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
        
    const that = this;
    periodSelect.addEventListener('input', function () {
        incomePeriodValue.value = that.calcPeriod();
    });
};
    // добавляющееся поле при клике на крестик
AppData.prototype.addExpensesBlock = function () {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};
    
AppData.prototype.resetExpensesInputs = function (cloneExpensesItems) {
    const cloneExpensesInputs = cloneExpensesItems.querySelectorAll('input');
    cloneExpensesInputs.forEach((item) => {
        item.value = '';
    });
};
    // поле обязательные расходы
AppData.prototype.getExpenses = function () {
    expensesItems.forEach((item) => {
        // поле наименование
        const itemExpenses = item.querySelector('.expenses-title').value;
        // поле сумма
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            appData.expenses[itemExpenses] = cashExpenses;
        }
    });
};
    // поле дополнительный доход
AppData.prototype.getIncome = function () {
    incomeItems.forEach((item) => {
        const incomeTitle = item.querySelector('.income-title').value;
        const incomeAmount = item.querySelector('.income-amount').value;
            
        if (incomeTitle !== '' && incomeAmount !== '') {
            this.income[incomeTitle] = incomeAmount;
        }
    });
    // перебираем все значения дополнительных заработков и сумируем значения
    for (const key in this.income) {
        this.incomeMonth += +this.income[key];
    }
};
    
AppData.prototype.getIncomeBlock = function () {
    const cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items')
    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};
    
    // возможные расходы
AppData.prototype.getAddExpenses = function () {
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
        item = item.trim();
        if (item !== '') {
            this.addExpenses.push(item);
        }
    });
};
    // поле дополнительные доходы
AppData.prototype.getAddIncome = function () {
    additionalIncomeItems.forEach((item) => {
        const itemValue = item.value.trim();
        if (itemValue !== '') {
            this.addIncome.push(itemValue);
        }
});
};
AppData.prototype.getExpensesMonth = function () {
    let sum = 0;
    for (let item in this.expenses) {
        sum += +this.expenses[item];
    }
    this.expensesMonth = sum;
};

AppData.prototype.getBudget = function () {
    const budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    const budgetDay = Math.floor(budgetMonth / 30);
    this.budgetMonth = budgetMonth;
    this.budgetDay = budgetDay;
};
    // поле дневной бюджет
AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome = function () {
    if (this.budgetDay > 1200) {
        console.log('У Вас высокий уровень дохода');
    } else if (this.budgetDay > 600 && this.budgetDay <= 1200) {
        console.log('У Вас средний уровень дохода');
    } else if (this.budgetDay > 0 && this.budgetDay <= 600) {
        console.log('У Вас низкий уровень дохода');
    } else {
        console.log('Что то пошло не так');
    }
};

AppData.prototype.getInfoDeposit = function () {
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
};
    // селект расчета периода
AppData.prototype.calcPeriod = function () {
    return this.budgetMonth * periodSelect.value;
};
     
AppData.prototype.disabledTrue = function () {
    startBtn.style.opacity = 0.1;
    startBtn.style.cursor = 'default';
    startBtn.disabled = true;
};

AppData.prototype.disabledFalse = function () {
    startBtn.style.opacity = 1;
    startBtn.style.cursor = '';
    startBtn.disabled = false;
};

AppData.prototype.addEventListeners = function () {
    startBtn.addEventListener('click', () => {
        return this.start.bind(this)();
    });
    expensesPlus.addEventListener('click', () => {
        return this.addExpensesBlock.bind(this)();
    });
    incomePlus.addEventListener('click', () => {
        return this.getIncomeBlock.bind(this)();
    });
    periodSelect.addEventListener('input', () => {
        periodAmount.textContent = periodSelect.value;
    });
    salaryAmount.addEventListener('input', () => {
        if (!isNumber(salaryAmount.value)) {
            return  this.disabledTrue.bind(this)();
        } else {
            return this.disabledFalse.bind(this)();
        }
    });
};

const appData = new AppData();

appData.disabledTrue();
appData.addEventListeners();
console.log(appData)



