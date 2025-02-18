// ДЗ №3
// Необходимо написать функцию, которая принимает Promise и некоторое количество миллисекунд и возвращает новый Promise.

// Если переданный Promise не успевает зарезолвиться до истечения этого времени, то результирующий Promise должен зареджектиться с ошибкой new Error('Timeout').


function timeout(promise, ms) {
    const timeoutPromise = new Promise((resolve, reject) => {
         setTimeout(() => {
             reject(new Error('Timeout'));
         }, ms)
     });
 
     return Promise.race([promise, timeoutPromise]);
 }
 
 timeout(fetch('https://jsonplaceholder.typicode.com/posts?exact'), 2000).then(console.log, console.error);