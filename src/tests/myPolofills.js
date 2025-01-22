// Array.prototype.myMap
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Array.prototype.myMap called on wrong type');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(`Array.prototype.myMap ${callback} is not a function`);
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }

    return result;
  };
}

// console.log([1, 2, 3].map((item) => item * 2));
// console.log([1, 2, 3].myMap((item) => item * 2));

// Array.prototype.myReduce
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initValue) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Array.prototype.myReduce called on wrong type');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(`Array.prototype.myReduce ${callback} is not a function`);
    }

    let acc = arguments.length >= 2 ? initValue : this[0];
    let startIndex = arguments.length >= 2 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

// console.log([1, 2, 3].reduce((acc, item) => acc + item));
// console.log([1, 2, 3].myReduce((acc, item) => acc + item));

// Array.prototype.myFlat
if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function (depth = 1) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Array.prototype.myFlat called on wrong type');
    }

    if (isNaN(depth) || depth <= 0) {
      return this;
    }

    const flatten = (arr, depth) => {
      let result = [];

      for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];

        if (Array.isArray(curr) && depth > 0) {
          result.push(...flatten(curr, depth - 1));
        } else {
          result.push(curr);
        }
      }

      return result;
    };

    return flatten(this, depth);
  };
}

// console.log(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ].flat(2)
// );
// console.log(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ].myFlat(2)
// );

// Array.prototype.myFilter
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Array.prototype.myFilter called on wrong type');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(`Array.prototype.myFilter ${callback} is not a function`);
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

// console.log([1, 2, 3].filter((item) => item > 1));
// console.log([1, 2, 3].myFilter((item) => item > 1));

// Array.prototype.mySome
if (!Array.prototype.mySome) {
  Array.prototype.mySome = function (callback) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Array.prototype.mySome called on wrong type');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(`Array.prototype.mySome ${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }

    return false;
  };
}

// console.log([1, 2, 3].some((item) => item > 1));
// console.log([1, 2, 3].mySome((item) => item > 1));

// Array.prototype.myBubbleSort
if (!Array.prototype.myBubbleSort) {
  Array.prototype.myBubbleSort = function (callback) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Array.prototype.myBubbleSort called on wrong type');
    }

    if (callback && typeof callback !== 'function') {
      throw new TypeError(`Array.prototype.myBubbleSort ${callback} is not a function`);
    }

    const arr = this;
    const length = arr.length;

    const defaultCompare = (a, b) => {
      if (a === undefined) return 1;
      if (b === undefined) return -1;
      return String(a).localeCompare(String(b));
    };

    const compare = callback || defaultCompare;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

// Array.prototype.myQuickSort
if (!Array.prototype.myQuickSort) {
  Array.prototype.myQuickSort = function (compareFn) {
    if (!Array.isArray(this)) {
      throw new TypeError('Array.prototype.myQuickSort can only be called on arrays');
    }

    // Если compareFn не передан, используем сортировку по умолчанию
    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);
      return strA.localeCompare(strB);
    };

    const compare = compareFn || defaultCompare;

    // Реализация QuickSort
    const quickSort = (arr) => {
      if (arr.length <= 1) return arr;

      const pivot = arr[Math.floor(arr.length / 2)];
      const left = [];
      const right = [];
      const middle = [];

      for (let i = 0; i < arr.length; i++) {
        const comparison = compare(arr[i], pivot);
        if (comparison < 0) {
          left.push(arr[i]);
        } else if (comparison > 0) {
          right.push(arr[i]);
        } else {
          middle.push(arr[i]);
        }
      }

      return [...quickSort(left), ...middle, ...quickSort(right)];
    };

    // Копируем массив перед сортировкой, чтобы избежать изменений оригинального массива
    const sortedArray = quickSort([...this]);

    // Перезаписываем элементы массива на отсортированные
    for (let i = 0; i < this.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

console.log([1, -2, 15, 2, 0, 8].sort((a, b) => a - b));
console.log([1, -2, 15, 2, 0, 8].myBubbleSort((a, b) => a - b));
console.log([1, -2, 15, 2, 0, 8].myQuickSort((a, b) => a - b));

// Array.prototype.myFind
if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (callback, thisArg) {
    // Проверка, что метод вызван на массиве
    if (!Array.isArray(this)) {
      throw new TypeError('Array.prototype.myFind can only be called on arrays');
    }

    // Проверка, что передан коллбэк
    if (typeof callback !== 'function') {
      throw new TypeError(`Array.prototype.myFind ${callback} is not a function`);
    }

    // Итерация по массиву
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i]; // Возвращаем первый найденный элемент
      }
    }

    return undefined; // Если ничего не найдено, возвращаем undefined
  };
}

console.log([1, 2, 3].find((item) => item > 1));
console.log([1, 2, 3].myFind((item) => item > 1));
