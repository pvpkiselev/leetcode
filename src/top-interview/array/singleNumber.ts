// function singleNumber(nums: number[]): number {
//   const map = new Map();
//   let result;

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (map.get(nums[i]) === 1) {
//       result = nums[i];
//     }
//   }

//   return result || 0;
// }

function singleNumber(nums: number[]): number {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
