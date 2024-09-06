function alphabetPosition(text) {
  const arr = text.split('').filter((letter) => letter.match(/[a-z]/i));
  return arr.map((letter) => letter.toLowerCase().charCodeAt(0) - 96).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
