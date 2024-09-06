function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(target - nums[i])) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([6, 6, 2, 4], 12));
