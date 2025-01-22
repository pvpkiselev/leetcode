function isPalindrome(s: string): boolean {
  const clean = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));

function isPalindrome(s: string): boolean {
  // toLowerCase();
  const reg = /[^a-zA-Zа-яА-ЯёЁ0-9]+/g;
  const word = s.replace(reg, '').toLowerCase();

  let firstIndex = 0;
  let lastIndex = word.length - 1;

  for (let i = 0; i <= lastIndex; i++) {
    if (word[firstIndex] !== word[lastIndex]) {
      return false;
    }

    firstIndex++;
    lastIndex--;
  }

  return true;
}
