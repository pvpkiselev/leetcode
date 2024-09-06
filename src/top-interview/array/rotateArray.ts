function rotate(nums: number[], k: number): void {
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }

  const end = nums.splice(0, nums.length - k);
  nums.push(...end);

  nums;
}

console.log(rotate([-1, -100, 3, 99], 2));
