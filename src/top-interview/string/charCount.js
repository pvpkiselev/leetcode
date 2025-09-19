function charCount(str) {
    const map = new Map()

    let result = ''

    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for (let [key, value] of map) {
        result += `${key}${value === 1 ? '' : value}`
    }

    return result
}


console.log(charCount('AAABBBBBBCCCDDEFGGKL'))