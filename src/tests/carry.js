function carry(fn) {
  return function curried(...args) {
    if (args.length === 0) {
      return fn();
    }

    return (...nextArgs) => {
      if (nextArgs.length === 0) {
        return fn(...args);
      }

      return curried(...args, ...nextArgs);
    };
  };
}

// Пример функции sum с любым количеством аргументов
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

// Каррированная версия sum
const carriedSum = carry(sum);

// Примеры вызовов
console.log(carriedSum(1, 2, 3, 4, 5, 6)()); // 21
console.log(carriedSum(1)(2, 3)(4, 5, 6)()); // 21
console.log(carriedSum(1)(2)(3)(4)(5)(6)()); // 21
console.log(carriedSum(1)(2)(3)(4)(5)(6)(7)(8)()); // 36 (любое количество аргументов)
