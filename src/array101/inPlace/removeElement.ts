function removeElement(nums: number[], val: number): number {
  const filtered = nums.filter((num) => num !== val);
  nums.splice(0, nums.length, ...filtered);
  return filtered.length;
}

console.log(removeElement([3, 2, 2, 3], 3));
