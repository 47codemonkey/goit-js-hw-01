'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const input = prompt('Необходимо ввести пароль:');
if (input === null) {
    message = 'Отменено пользователем!';
} else if (input !== ADMIN_PASSWORD) {
    message = 'Доступ  запрещен, неверный пароль!';
} else {
    message = 'Добро пожаловать! ';
}
alert(message);