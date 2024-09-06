function positiveSum(arr) {
  return arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);
}

console.log(positiveSum([1, -4, 7, 12]));
