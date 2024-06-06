function removeDuplicates(nums: number[]): number {
  const lengthMinusOne = nums.length - 1;

  for (let i = lengthMinusOne; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}

console.log(removeDuplicates([1, 1, 2]));
