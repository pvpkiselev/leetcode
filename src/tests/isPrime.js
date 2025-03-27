// Простое число — натуральное число, имеющее ровно два различных натуральных делителя.

// Другими словами, натуральное число p является простым, если оно отлично от 1 и делится без остатка только на 1 и на само себя, т.е. p.

// Напишите функцию isPrime(n), которая проверяет, является ли число n простым либо нет.

function isPrime(n) {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false