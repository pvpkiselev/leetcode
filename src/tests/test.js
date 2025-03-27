const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };

function logArr() {
    for (let i in arr) {
        console.log(i);
    }
}

function logObj() {
    for (let i of obj) {
        console.log(i);
    }
}

console.log(logArr())

console.log(logObj())