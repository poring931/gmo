'use strict'
let start = document.querySelector('#start'),
    budget_list = document.getElementsByClassName('result-table')[0].children,
    expenses = document.getElementsByClassName('expenses-item'),
    optionalexpenses_btn = document.querySelector('.optionalexpenses-btn'),
    expenses_item_btn = document.querySelector('.expenses-item-btn'),
    optionalexpenses_item = document.getElementsByClassName('optionalexpenses-item'),
    summ = document.querySelector('.choose-sum'),
    percentt = document.querySelector('.choose-percent'),
    income = document.querySelector('.choose-income'),
    month = document.querySelector('.month-value'),
    year_value = document.querySelector('.year-value'),
    day = document.querySelector('.day-value'),
    count_btn = document.querySelector('.count-budget-btn'),
    saving_check = document.querySelector('#savings');
    let budjet_items=[];
let count = 0;
for (let i = 0; i <= budget_list.length; i++) {
    if ((i%2) == 1){
        count++;
        budjet_items[count] = budget_list[i];
    }
}
let money,time;

start.addEventListener('click', function () {
    time = prompt('ВВедите дату в формате YYYY-MM-DD');
    money = +prompt('Ващ бюджеь а месяц?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budjet_items[1].textContent = money.toFixed();
    year_value.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();
});

expenses_item_btn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        let a = expenses[i].value,
            b = expenses[++i].value;
        if (typeof (a) === 'string' && (typeof (a) != null) && (typeof (b) != null) && (a != '') && (b != '') && (a.length < 50)) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i -1;
        }
    }
    budjet_items[4].textContent = sum;
});

optionalexpenses_btn.addEventListener('click', function () {
    for (let i = 0; i < optionalexpenses_item.length; i++) {
        let opt = optionalexpenses_item[i].value;
        appData.optionalExpenses[i] = opt;
        budjet_items[5].textContent += appData.optionalExpenses[i] + ' ';
    }

});

count_btn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay =(appData.budget / 30).toFixed();
        budjet_items[2].textContent = appData.moneyPerDay;
        if(appData.moneyPerDay < 100 ) {
            budjet_items[3].textContent = "минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            budjet_items[3].textContent = 'Средний достаток';
        } else if (appData.moneyPerDay > 2000) {
            budjet_items[3].textContent = 'Высокий уровень достатка';
        } else {
            budjet_items[3].textContent = 'Ошибка';
        }
    } else {
        budjet_items[2].textContent = 'Произошла ошибка';
    }
});

income.addEventListener('input', function () {
    let items = income.value;
    appData.income = items.split(', ');
    budjet_items[6].textContent = appData.income;
})

saving_check.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

summ.addEventListener('input', function () {
    if ( appData.savings == true){
        let sum = +summ.value,
            percent = +percentt.value;
        appData.montIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        budjet_items[7].textContent =  appData.montIncome;
        budjet_items[8].textContent =  appData.yearIncome.toFixed(1);
    }
})

percentt.addEventListener('input', function () {
    if ( appData.savings == true){
        let sum = +summ.value,
            percent = +percentt.value;
        appData.montIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        budjet_items[7].textContent =  appData.montIncome;
        budjet_items[8].textContent =  appData.yearIncome.toFixed(1);
    }
})

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,

}