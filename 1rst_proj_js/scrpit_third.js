let money, time;

function start() {
    money = +prompt('Ваш бюджет в месяц?', '');
    time = prompt('введите дату в формате YY-DD-MM');

    while (isNaN(money) ||  money == '' || money == null) {
        money = +prompt('Ваш бюджет в месяц?', '');

    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings:true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('ВВедите обязаттельную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if (typeof (a) === 'string' && (typeof (a) != null) && (typeof (b) != null) && (a != '') && (b != '') && (a.length < 50)) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i -1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay =(appData.budget / 30).toFixed();
        console.log(appData.moneyPerDay);
    },
    detectLevel: function () {
        if(appData.moneyPerDay < 100 ) {
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний достаток');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            appData.montIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита:' + appData.montIncome );
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; 1 < 3; i++) {
            let opt = prompt('Статья необзятаельных расходов?', '');
        }
    },
    chooseIncome: function () {
        let items;
        do {
            items = prompt('Что принесет дополнительный доход? (перечислети через запятую)', '');
        } while (appData.income != '' && appData.income != ' ')
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще ?'));
        appData.income.sort();
        appData.income.forEach(function (item, i, mas) {
            console.log('способы доп заработка'+ i + ': ' + item);
        });
    }
}
appData.chooseIncome();

for (let key in appData) {
    console.log('свойство ' + key + ' имеет значение ' + appData[key]);
}

