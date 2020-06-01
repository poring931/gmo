// function showThis(a,b) {
//     console.log(this);
//     function sum( ) {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(1,2);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function show() {
//             console.log(this);
//         }
//         show();
//     }
// }
//
// obj.sum();

// let user = {
//     name: 'John'
// };
//
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name +surname);
//
// }
//
// console.log(sayName.call(user, 'Jijosovich'));
// console.log(sayName.apply(user, ['Snow']));

function count(number) {
    return this * number;

}

let double = count.bind(2);
console.log(double(3));
console.log(double(33));