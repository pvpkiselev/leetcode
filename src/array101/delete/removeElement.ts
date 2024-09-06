// Учитывая целочисленный массив nums и целое число val, удалите все вхождения val в nums

function removeElement(nums: number[], val: number): number {
  const result = nums.filter((num) => num !== val);
  result.forEach((num, i) => (nums[i] = num));
  return result.length;
}

console.log(removeElement([3, 2, 2, 3], 3));
