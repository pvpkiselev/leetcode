// Изограмма - это слово, в котором нет повторяющихся букв, неважно последовательных или непоследовательных. 

// Реализуйте функцию isIsogram(str), которая определяет, является ли строка str, содержащая только буквы, изограммой. 

// Функция должна вернуть true, если строка является изограммой, в противном случае функция должна вернуть false.

// Пусть пустая строка является изограммой. Алгоритм не должен обращать внимание на регистр букв.

function isIsogram(str) {
    const arr = str.toLowerCase().split(''); 
    const set = new Set(arr);
    return arr.length === set.size
}

function isIsogram2(str) {
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            return false;
        }
        map.set(str[i], true);
    }
    return true
}

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false