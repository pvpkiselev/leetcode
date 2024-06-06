const findNumbers = function (nums: number[]) {
  let count = 0;

  nums.forEach((num) => {
    const string = num.toString();
    if (string.length % 2 === 0) {
      count++;
    }
  });

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
