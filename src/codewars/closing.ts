function counter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

function counter2(x: number) {
  return function (y: number) {
    return x + y;
  };
}

// Примеры использования
const setCounter = counter();
console.log(setCounter()); // 1
console.log(setCounter()); // 2

console.log(counter2(2)(3)); // 5
