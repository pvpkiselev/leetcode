function twoSum(nums, target) {
  const map = new Map(); // Хранилище для чисел и их индексов

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Число, которое нужно найти

    if (map.has(complement)) {
      return [map.get(complement), i]; // Возвращаем индексы пары
    }

    map.set(nums[i], i); // Сохраняем текущее число и его индекс
  }

  return []; // Если ничего не найдено
}
console.log(twoSum([6, 6, 2, 4], 12));
