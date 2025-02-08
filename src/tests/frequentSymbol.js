function frequentSymbol(text) {
  // Создаём объект для подсчёта количества символов
  const charCount = {};

  // Проходим по каждому символу в тексте
  for (const char of text) {
    // Игнорируем пробелы (если нужно)
    if (char !== ' ') {
      // Увеличиваем счётчик для текущего символа
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  // Находим символ с максимальным количеством повторений
  let maxChar = '';
  let maxCount = 0;

  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
}
