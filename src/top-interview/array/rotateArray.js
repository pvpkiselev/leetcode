// function rotate(nums: number[], k: number): void {
//   // for (let i = 0; i < k; i++) {
//   //   nums.unshift(nums.pop());
//   // }

//   const end = nums.splice(0, nums.length - k);
//   nums.push(...end);

//   nums;
// }

// console.log(rotate([-1, -100, 3, 99], 2));


function rotateArray(nums, k) {
  const rightPart = nums.slice(nums.length - k, nums.length)
  const leftPart = nums.slice(0, nums.length - k)

  const result = [...rightPart, ...leftPart]
  return result
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)) 