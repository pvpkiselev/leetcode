function sumArray(arr) {
  return arr.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
