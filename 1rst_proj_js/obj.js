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