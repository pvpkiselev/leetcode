// ДЗ №1
// Необходимо написать функцию возвращающую Promise, который должен зарезолвиться через заданное количество миллисекунд.


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

sleep(2000).then(() => {
    console.log('Я проснулся!');
});
