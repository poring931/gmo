
// let cal = function (a, b) {
//     return (a + b);
// }

let calc = (a,b) => a+b
console.log(calc(3, 55));
console.log(calc(22, 33));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log((anotherNum));

let str = 'test';
console.log(str.length);

console.log(str.toUpperCase());

let twelve = '12.2px';
console.log(parseInt(twelve));
//-------------------------------------------------------------
function showMessage(from, text) {

    from = '*' + from + '*'; // немного украсим "from"

    console.log( from + ': ' + text );
}

let from = "Аня";

showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
console.log( from ); // Аня