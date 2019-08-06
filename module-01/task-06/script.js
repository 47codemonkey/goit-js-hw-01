'use strict';

let input = 0;
let total = 0;

while (input !== null) {
    input = prompt(`Ваше число ${total}`);
    if (input === null) {
        alert(`Общая сумма чисел ${total}`);
    } else if (Number.isNaN(Number(input))) {
        alert('Разрешено вводить только цифры')
    } else {
        total += Number(input);
    }
}