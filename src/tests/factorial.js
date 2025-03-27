// Факториал — это произведение всех натуральных чисел от 1 до некоторого числа n включительно.

// Напишите функцию factorial(n), которая будет возвращать факториал от n.

// Считайте, что факториал от нуля равен единице.


function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800