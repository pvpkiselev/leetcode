// Реализуйте функцию divide(str), которая принимает строку и разделяет её на пары из двух символов.

// Если строка содержит нечетное количество символов, то к последней паре следует добавить символ _ для четности. 

// Функция должна вернуть массив строк разделённых пар.

function divide(str) {
    const resultArr = [];
    
    for (let i = 0; i < str.length; i += 2) {
      const pair = str.slice(i, i + 2);
      resultArr.push(pair);
    }

    if (str.length % 2 !== 0) {
      resultArr[resultArr.length - 1] += '_';
    }
  
    return resultArr;
}

console.log(divide('abcde')); // ['ab', 'cd', 'e_']
console.log(divide('abcdef')); // ['ab', 'cd', 'ef']