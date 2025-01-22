function reverseNumber(num) {
  let reversed = 0;
  const isNegative = num < 0;
  num = Math.abs(num);

  while (num !== 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return isNegative ? -reversed : reversed;
}

function reverseNumber2(x: number): number {
  let num = 0;
  if (x < 0) num = -Number(x.toString().split('').slice(1).reverse().join(''));
  else num = Number(x.toString().split('').reverse().join(''));
  if (num < -2147483648 || num > 2147483647) return 0;
  else return num;
}
