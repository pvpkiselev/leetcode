function solveSorting(arr) {
    const map = {};

    for (const num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    return arr.sort((a, b) => {
        if (map[b] !== map[a]) {
            return map[b] - map[a];
        }

        return a - b;
    });
}

console.log(solveSorting([10, 30, 20, 40, 30, 10]))
// [10, 10, 30, 30, 20, 40]