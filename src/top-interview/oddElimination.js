function oddElimination(str) {
    while (str.length > 1) {
        
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (i % 2 !== 0) {
                newStr += str[i];
            }
        }
        str = newStr;
    }
    return str;
}

console.log(oddElimination('abcdef')) // d
console.log(oddElimination('hello world')) // o
console.log(oddElimination('123456789')) // 8