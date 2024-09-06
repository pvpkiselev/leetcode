function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      result = result + 1;
    }
  }

  return result;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
