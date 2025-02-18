// ДЗ №5
// Необходимо написать функцию, которая идентична Promise.allSettled.


function allSettled(iterable) {
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
                    result[index] = { status: 'fulfilled', value };
                })
                .catch((reason) => {
                    result[index] = { status: 'rejected', reason };
                })
                .finally(() => {
                    if (result.length === promises.length) {
                        resolve(result);
                    }
                })
        })
    })
}

const task1 = new Promise((resolve) => setTimeout(resolve, 100, 'Task 1 completed'));
const task2 = new Promise((_, reject) => setTimeout(reject, 200, 'Task 2 failed'));
const task3 = new Promise((resolve) => setTimeout(resolve, 300, 'Task 3 completed'));

// Task 1: Success - Task 1 completed
// Task 2: Failure - Task 2 failed
// Task 3: Success - Task 3 completed
allSettled([task1, task2, task3])
  .then((results) => {
    for (const [index, result] of results.entries()) {
      if (result.status === 'fulfilled') {
        console.log(`Task ${index + 1}: Success - ${result.value}`);
      } else {
        console.log(`Task ${index + 1}: Failure - ${result.reason}`);
      }
    }
  });
