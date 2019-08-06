'use strict'

const credits = 23580;
const pricePerDroid = 3000;

const droidsQuantity = prompt('How many droids would you like to buy?');
if (droidsQuantity === null) {
    alert('Cancelled by user!');
} else {
    const totalPrice = pricePerDroid * Number(droidsQuantity);
    if (credits < totalPrice) {
        alert('Not enough funds on account!');
    } else {
        alert(`вы купили ${droidsQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
}