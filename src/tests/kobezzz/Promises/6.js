// ДЗ №6
// Необходимо написать функцию, которая идентична Promise.race.


function race(iterable) {
    return new Promise((resolve, reject) => {
        for (const promise of iterable) {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
        }
    })
}


const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 50, 'Third Rejected'));

// Rejected with reason: Third Rejected
race([promise1, promise2, promise3])
  .then((value) => {
    console.log(`Resolved with value: ${value}`);
  })
  .catch((reason) => {
    console.log(`Rejected with reason: ${reason}`);
  });