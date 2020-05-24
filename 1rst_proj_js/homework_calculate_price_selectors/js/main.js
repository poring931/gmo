let start = document.querySelectorAll('#start'),
    budget_list = document.getElementsByClassName('result-table')[0].children,
    expenses = document.getElementsByClassName('expenses-item'),
    optionalexpenses_btn = document.getElementsByClassName('optionalexpenses-btn'),
    expenses_item_btn = document.getElementsByClassName('expenses-item-btn'),
    optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    income = document.querySelector('.choose-income'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    let budjet_items=[];
let count = 0;
for (let i = 0; i <= budget_list.length; i++) {
    if ((i%2) == 1){
        count++;
        budjet_items[count] = budget_list[i];
    }
}
