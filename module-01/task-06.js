'use strict';

let input;
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    if (input === null) {
        alert(`Общая сумма чисел ${total}`);
    } else if (Number.isNaN(Number(input))) {
        alert('Разрешено вводить только цифры')
    } else {
        total += Number(input);
    }
}

// OR
//let input;
//let total = 0;
//while (input !== null) {
//input = prompt('Введите число');
//if (input === null) {
//break;
//}
//total += Number(input);
//}
//alert(`Общая сумма чисел равна ${total}`);