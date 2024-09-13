// Написать функцию add, которую принимает число,
// и может вызываться бесконечное количество раз,
// пока не будет вызвана без аргументов, тогда она
// вернёт сумму раннее переданных чисел

// Каррирование

const add = (num) => {
  let sum = num || 0;

  function addNextNum(nextNum) {
    if (!nextNum) {
      return sum;
    } else {
      sum = sum + nextNum;
      return addNextNum;
    }
  }

  return num === undefined ? 0 : addNextNum;
};

console.log(add(2)(3)());
// console.log(add(2)(3)());
// console.log(add(2)());
// console.log(add());
