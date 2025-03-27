// Нужно написать функцию highAndLow(numbers), которая будет получать строку чисел numbers, разделенных пробелом. 

// Функция должна вернуть строку с наибольшим и наименьшим числом из полученной строки).

function highAndLow(nums) {
    let minNum = Infinity;
    let maxNum = -Infinity;

    const numsArr = nums.split(' ');

    for (let i = 0; i < numsArr.length; i++) {
        const num = parseInt(numsArr[i]);

        if (num < minNum) {
            minNum = num;
        }
        
        if (num > maxNum) {
            maxNum = num;
        }
    }

    return `${maxNum} ${minNum}`;
}

console.log(highAndLow("1 2 3 4 5")); // "5 1"
console.log(highAndLow("1 2 -3 4 5")); // "5 -3"