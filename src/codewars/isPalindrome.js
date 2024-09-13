//Проверить или слово палиндром

function isPalindrom(word) {
  let firstIndex = 0;
  let lastIndex = word.length - 1;

  for (let i = 0; i < word.length - 1; i++) {
    if (word[firstIndex] !== word[lastIndex]) {
      return false;
    }

    firstIndex++;
    lastIndex--;
  }

  return true;
}

console.log(isPalindrom("azaza"));
console.log(isPalindrom("azaz"));
