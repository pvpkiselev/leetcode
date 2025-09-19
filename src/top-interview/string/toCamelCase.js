function toCamelCase(str){
    if (!str) return '';

    const regEx = /^[a-zA-Zа-яА-Я]/

    let result = str.substring(0, 1)
    let capitalizeNext = false

    for (let i = 1; i < str.length; i++) {
        const char = str[i]

        if (!regEx.test(char)) {
            capitalizeNext = true
            continue
        }

        result += capitalizeNext ? char.toUpperCase() : char;
        capitalizeNext = false
    }

    return result
}

console.log(toCamelCase("the-stealth-warrior"))