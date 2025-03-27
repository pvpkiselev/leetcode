// Нужно написать функцию squareOrSquareRoot(array), которая будет получать целочисленный массив в качестве параметра и обрабатывать каждое число из этого массива.

// Если число является полным квадратом, извлеките его корень, иначе возведите число в квадрат.

// Функция должна вернуть новый массив, с обработанными числами полученного массива. 

function squareOrSquareRoot(array) {
    return array.map((num, i, arr) => {
        const sqrt = Math.floor(Math.sqrt(num));
        const square = Math.pow(sqrt, 2);

        if (square === arr[i]) {
            return sqrt;
        } else {
            return num * num;
        }
    })
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));