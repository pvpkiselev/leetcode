//Вернуть третье самое максимальное число

// function thirdMax(nums: number[]): number {
//   nums.sort((a, b) => b - a);

//   let count = 1;
//   let prev = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== prev) {
//       count += 1;
//       prev = nums[i];
//     }

//     if (count === 3) {
//       return nums[i];
//     }
//   }

//   return nums[0];
// }

function thirdMax(nums: number[]): number {
  const set = new Set<number>(nums);
  const sorted = [...set].sort((a, b) => b - a);

  return sorted.length >= 3 ? sorted[2] : sorted[0];
}

console.log(thirdMax([3, 2, 1]));
