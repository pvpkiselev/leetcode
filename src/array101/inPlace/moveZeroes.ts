function moveZeroes(nums: number[]): void {
  const length = nums.length;
  let currentIndex = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }

  for (let i = currentIndex; i < length; i++) {
    nums[i] = 0;
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
