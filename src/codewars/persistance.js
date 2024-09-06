function persistence(num) {
  let count = 0;
  let str = num.toString();
  while (str.length > 1) {
    let sum = str.split('').reduce((a, b) => (a *= Number(b)), 1);
    str = sum.toString();
    count++;
  }

  return count;
}

console.log(persistence(39));
