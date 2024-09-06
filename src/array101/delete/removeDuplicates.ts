function removeDuplicates(nums: number[]): number {
  let temp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...temp);
  return nums.length;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 4, 5, 5, 6]));
