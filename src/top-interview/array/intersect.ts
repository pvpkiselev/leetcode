function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  for (let num of nums1) {
    if (nums2.includes(num)) {
      result.push(num);
      nums2.splice(nums2.indexOf(num), 1);
    }
  }

  return result;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
