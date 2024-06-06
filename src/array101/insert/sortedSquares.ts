const sortedSquares = function (nums: number[]) {
  const resultArr: number[] = [];

  nums.forEach((num) => {
    const squaredNum = Math.pow(num, 2);
    resultArr.push(squaredNum);
  });

  const sortedResultArr = resultArr.sort((a, b) => a - b);
  return sortedResultArr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
