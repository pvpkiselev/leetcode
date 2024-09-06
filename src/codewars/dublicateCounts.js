function duplicateCount(text) {
  const textArr = text.toLowerCase().split('');
  const textSet = new Set(textArr);
  return [...textSet].filter((char) => textArr.indexOf(char) !== textArr.lastIndexOf(char)).length;
}

console.log(duplicateCount('Indivisibilities'));
