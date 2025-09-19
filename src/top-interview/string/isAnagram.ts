function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const arrS = s.split('');
  const arrT = t.split('');

  const isStringsAnagrams = arrS.sort().join('') === arrT.sort().join('');

  return isStringsAnagrams;
}

console.log(isAnagram('anagram', 'nagaram'));

function isAnagram2(s, t) {
  s = s.toLowerCase();
  t = t.toLowerCase();

  if (s.length !== t.length) {
    return false;
  }

  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!count.has(char) || count.get(char) === 0) {
      return false;
    }

    count.set(char, count.get(char) - 1);
  }

  return true;
}