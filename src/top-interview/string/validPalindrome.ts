function isPalindrome(s: string): boolean {
  const clean = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
