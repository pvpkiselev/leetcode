function sumDigits(number) {
    // Преобразуем число в строку, чтобы можно было итерироваться по цифрам
    const str = number.toString();
    let sum = 0;

    // Проходим по каждому символу строки
    for (let char of str) {
        // Преобразуем символ обратно в число и добавляем к сумме
        sum += parseInt(char, 10);
    }

    return sum;
}

console.log(sumDigits(12461728368172638)); // 75
console.log(sumDigits(123)); // 6
console.log(sumDigits(5)); // 5
console.log(sumDigits(0)); // 0