// Напишите функцию с именем squareSum, которая принимает массив чисел numbers,  и возводит каждое число в квадрат и затем складывает все полученные значения вместе. 

// Функция должна вернуть сумму квадратов всех чисел из массива.

function squareSum(nums) {
    return nums.reduce((acc, num) => acc + Math.pow(num, 2), 0);
}

console.log(squareSum([1, 2, 2]));
console.log(squareSum([3, 3]));