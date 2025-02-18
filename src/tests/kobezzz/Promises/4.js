// ДЗ №4
// Необходимо написать функцию, которая идентична Promise.all.


function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        const promises = Array.from(iterable);

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        const result = new Array(promises.length);

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    result[index] = value;
                })
                .catch(reject);
        })
    })
}

// const promise1 = Promise.resolve('A');
// const promise2 = Promise.resolve('B');
// const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'C'));

promiseAll([promise1, promise2, promise3]).then(values => {
    console.log(values); // ['A', 'B', 'C']
});

const promise4 = Promise.resolve('Value1');
const promise5 = new Promise((resolve) => setTimeout(resolve, 200, 'Value2'));
const promise6 = Promise.reject('Rejected!');

const promisesMap = new Map([
    ['key1', promise4],
    ['key2', promise5],
    ['key3', promise6]
]);

promiseAll(promisesMap.values())
    .then(values => {
        console.log(values); // Этот блок не выполнится
    })
    .catch(error => {
        console.error(error); // 'Rejected!'
    });