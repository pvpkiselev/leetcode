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
