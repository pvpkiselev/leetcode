function binarySearch(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const guess = nums[mid];

    if (guess === target) {
      return nums.indexOf(guess);
    } else if (guess > target) {
      end = mid - 1;
    } else if (guess < target) {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
