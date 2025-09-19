// Есть массив длины 2n + 1 целых чисел
// Про него известно, что в нём 2n дубликатов и одно число (x) без дубликата
// например, для массива [1, 2, 3, 1, 2, 3, 4] x = 4

const t1 = [1, 2, 3, 1, 2, 3, 4]; // 4
const t2 = [1, 2, 3, 6, 1, 2, 3]; // 6

function findSingle(arr) {
    const map = new Map()
    let num = 0

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (const [key, value] of map) {
        if (value === 1) {
            num = key
        }
    }

    return num
}

console.log(findSingle(t1))
console.log(findSingle(t2))