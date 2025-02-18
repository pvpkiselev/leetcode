// ДЗ №2
// Необходимо написать функцию возвращающую Promise, который должен зареджектиться через заданное количество миллисекунд.

// Вторым аргументов функция принимает объект ошибки.


function rejectAfterSleep(ms, err) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(err);
        }, ms);
    })
}

rejectAfterSleep(200, 'boom!').catch((err) => {
    console.log(err);
});