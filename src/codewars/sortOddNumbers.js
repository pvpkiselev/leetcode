// Отсортировать только нечётные числа в массиве
// Чётные должны остаться на своих местах

const input = [5, 2, 1, 4, 7, 6, 3];

const sortOddNumbers = (arr) => {
  let resultArr = [...arr];
  const filteredArr = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let currIndex = 0;

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] % 2 !== 0) {
      resultArr[i] = filteredArr[currIndex];
      currIndex++;
    }
  }

  return resultArr;
}

console.log(sortOddNumbers(input));