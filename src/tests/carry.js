function curryTwo(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function sumTwo(a, b, c) {
  return a + b + c;
}

let curriedSumTwo = curryTwo(sumTwo);

console.log( curriedSumTwo(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
console.log( curriedSumTwo(1)(2,3) ); // 6, каррирование первого аргумента
console.log( curriedSumTwo(1)(2)(3) ); // 6, каррирование всех аргументов



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
