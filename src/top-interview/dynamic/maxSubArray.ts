function maxSubArray(nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('Array must not be empty');
  }

  let maxSum: number = nums[0]; // Инициализируем максимум первым элементом
  let currentSum: number = nums[0]; // Текущая сумма также равна первому элементу

  for (let i = 1; i < nums.length; i++) {
    // Определяем текущую сумму: либо продолжаем текущий подмассив, либо начинаем новый
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Обновляем максимум, если текущая сумма больше
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Примеры использования
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [1];
const nums3 = [5, 4, -1, 7, 8];

console.log(maxSubArray(nums1)); // Вывод: 6
console.log(maxSubArray(nums2)); // Вывод: 1
console.log(maxSubArray(nums3)); // Вывод: 23
