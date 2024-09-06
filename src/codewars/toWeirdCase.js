function toWeirdCase(string) {
  const arr = string.split(' ');

  const wordArr = arr.map((word) =>
    word
      .split('')
      .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()))
      .join('')
  );

  return wordArr.join(' ');
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));
