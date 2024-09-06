function sortedSquares(nums: number[]): number[] {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
