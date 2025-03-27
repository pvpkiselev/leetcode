// Напишите функцию tripledouble(num1, num2), которая принимает числа num1 и num2.

// Функция должна возвращать 1, если в числе num1 есть три одинаковые цифры подряд, а в числе num2 есть две одинаковые цифры подряд.

// В противном случае функция должна вернуть 0.

function tripledouble(num1, num2) {
    const hasTriple = /(\d)\1\1/.test(num1);

    const hasDouble = /(\d)\1/.test(num2);

    return hasTriple && hasDouble ? 1 : 0;
}

console.log(tripledouble(451999277, 41177722899)) // 1;
console.log(tripledouble(1222345, 12345))  // 0;
console.log(tripledouble(12345, 122345)) // 0