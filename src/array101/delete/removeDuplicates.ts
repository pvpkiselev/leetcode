// function removeDuplicates(nums: number[]): number {
//   let temp = [...new Set(nums)];
//   nums.length = 0;
//   nums.push(...temp);
//   return nums.length;
// }

function removeDuplicates(nums: number[]): number {
  const map = new Map();

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      continue;
    }
    map.set(nums[i], true);
    result.push(nums[i]);
  }

  return result.length;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 4, 5, 5, 6]));
