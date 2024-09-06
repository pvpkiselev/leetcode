function isSquare(n) {
  if (n < 0) {
    return false;
  }

  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(25));
console.log(isSquare(-1));
console.log(isSquare(3));
