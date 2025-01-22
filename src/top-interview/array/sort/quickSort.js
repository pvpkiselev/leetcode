function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Базовый случай: массив из 0 или 1 элемента уже отсортирован
  }

  const pivot = arr[Math.floor(arr.length / 2)]; // Выбираем опорный элемент
  const left = [];
  const right = [];
  const middle = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Элементы меньше pivot отправляем в левую часть
    } else if (arr[i] > pivot) {
      right.push(arr[i]); // Элементы больше pivot отправляем в правую часть
    } else {
      middle.push(arr[i]); // Элементы равные pivot отправляем в middle
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)]; // Рекурсивно сортируем left и right
}
