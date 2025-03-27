function reverseDigits(number) {
    const isNegative = number < 0;

    let string = number.toString();

    if (isNegative) {
        string = string.slice(1);
    }

    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]; 
    }

    return Number(reversedString) * (isNegative ? -1 : 1);
}

console.log(reverseDigits(123)); // 321
console.log(reverseDigits(-123)); // -321