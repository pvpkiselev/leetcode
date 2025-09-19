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

// console.log(fibLoop(1));

const fibRecLoose = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibRecLoose(n - 1) + fibRecLoose(n - 2);
  }
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946

const fibNotArr = (n) => {
  if (n <= 1) {
    return 0
  }

  if (n <= 3) {
    return 1
  }

  return fibNotArr(n - 1) + fibNotArr(n - 2)
}

const fibNotArrLoop = (n) => {
  if (n <= 1) {
    return 0
  }

  if (n <= 3) {
    return 1
  }

  let prev = 1;
  let next = 2;

  for (let i = 4; i <= n; i++) {
    const temp = next;
    next = prev + next;
    prev = temp;
  }

  return prev
}

console.log(fibNotArrLoop(8))