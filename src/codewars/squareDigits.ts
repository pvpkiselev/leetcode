function squareDigits(num: number): number {
  const arr = num.toString().split('');
  const digitsArr = arr.map((digit) => Number(digit) ** 2);
  return Number(digitsArr.join(''));
}

console.log(squareDigits(3212));
