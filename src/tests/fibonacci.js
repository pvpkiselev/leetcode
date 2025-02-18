const fibRec = (n) => {
  if (n === 0) {
    return [0, 1];
  } else {
    const [prev, next] = fibRec(n - 1);
    return [next, prev + next];
  }
};

const fib = (n) => fibRec(n)[0];

const fibLoop = (n) => {
  let prev = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    const temp = next;
    next = prev + next;
    prev = temp;
  }

  return prev;
};

console.log(fibLoop(1));

const fibRecLoose = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibRecLoose(n - 1) + fibRecLoose(n - 2);
  }
}
