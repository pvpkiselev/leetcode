function findDisappearedNumbers(nums: number[]): number[] {
  const length = nums.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      continue;
    }

    nums[index] *= -1;
  }

  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
