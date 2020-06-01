let obj = new Object();
let options = {
  width: 1024,
  height: 1024,
  name: 'test'
};

console.log(options.width);
options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

let arr = [1, 2, 'third', 4, 5];
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push('5');
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('1');
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function (item, i, mas) {
    console.log(i + ': ' + item + ' (массив: ' + arr + ')');
});

console.log(arr);

let mass = [1, 3, 4, 6, 7];
for (let key of mass) {
    console.log(key);
}

let ans = 'asdj ksdksdg , kdsfdsjgwerp, asd, , ,,  , sdflldslw',
    arr2 = [];

arr2 = ans.split(',');
console.log(arr2);

let arr32 = ['asqwe', 'asdasd', 'asdsswww', 'wewqqq'],
    i2 = arr32.join(', ');
console.log(i2);

let mac = [1, 4, 5, 23];
let sor = mac.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}

console.log(sor);

let soldier = {
    health: 400,
    armor: 200
};

let john = {
    health: 100
};

john.__proto__ = soldier;

function checkAge(age) {

    // return (age > 18) || console.log('Родители разрешили?');
    return (age > 18) ? true : console.log('Родители разрешили?');

}
checkAge(12);

function returnMin(a, b) {
    return (a>b) ? console.log(b) : console.log(a);

}

returnMin(22, 2);
function pow(x,n) {
    let res = x;
    for (let i = 1; i < n; i ++) {
        res = x * res;
       // console.log(res);
    }
    return console.log(res);
}

pow(2, 10);
console.log('-------------------------------------------------------------------------');

class User2 {
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello () {
        console.log('Hello, my name is ' + this.name)
    }

    exit() {
        console.log('Пользователь ' + this.name + ' ушел');
    }
}

let ivan2 = new User2('Ivanich', 23123123),
    alex2 = new User2('Alex', 2);
console.log(ivan2);
console.log(alex2);
ivan2.hello();
ivan2.exit();

console.log('-------------------------------------------------------------------------');

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello, my name is ' + this.name)
    }
}

User.prototype.exit = function (name) {
    console.log('Пользователь ' + this.name + ' ушел');
};

let ivan = new User('Ivanich', 23123123),
    alex = new User('Alex', 2);
console.log(ivan);
console.log(alex);
ivan.hello();
ivan.exit();


