// function containsDuplicate(nums: number[]): boolean {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       return true;
//     }
//     map.set(nums[i], true);
//   }

//   return false;
// }

function containsDuplicate(nums: number[]): boolean {
  const arr = [...new Set(nums)];
  return arr.length !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1]));
