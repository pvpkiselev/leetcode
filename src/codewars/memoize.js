function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      const result = fn(arg);
      cache[arg] = result;
      return result;
    }
  };
}

const square = memoize((x) => x * x);
console.log(square(5));
console.log(square(5));
