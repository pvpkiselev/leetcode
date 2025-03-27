// Двумерный массив - массив, элементами которого являются другие массивы. Он формирует таблицу с рядами и столбцами, где каждый элемент имеет два индекса: для строки и столбца.

// Напишите функцию checkSquare(square), которая принимает двумерный массив и проверяет уникальность каждого элемента массива - числа. 

// Функция возвращает true, если каждое число является уникальным, и false - в противном случае.

function checkSquare(square) {
    const set = new Set();

    for (let i = 0; i < square.length; i++) {
        for (let j = 0; j < square[i].length; j++) {
            if (set.has(square[i][j])) {
                return false;
            }
            set.add(square[i][j]);
        }
    }

    return true;
}

function checkSquare2(square) {
    const seen = new Set(square.flat()); // Используем flat() для создания одномерного массива

    return seen.size === square.flat().length; // Если длины совпадают, значит все элементы уникальны
}

console.log(checkSquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(checkSquare([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));