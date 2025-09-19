// найти пары, которые в сумме дают 10

function findPairs(arr) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                result.push([arr[i], arr[j]])
            }
        }
    }

    return result
}

console.log(findPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [[1, 9], [2, 8], [3, 7], [4, 6]]


// найти сколько пар, которые в сумме дают 10

function findPairsCount(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                count++
            }
        }
    }

    return count
}