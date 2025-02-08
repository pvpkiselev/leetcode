// const fib2 = (n) => {
//   if (n === 0) {
//     return [0, 1];
//   } else {
//     const [prev, next] = fib2(n - 1);
//     return [next, prev + next];
//   }
// };

// const fib = (n) => fib2(n)[0];

const fib = (n) => {
  let prev = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    const temp = next;
    next = prev + next;
    prev = temp;
  }

  return prev;
};

console.log(fib(1));
