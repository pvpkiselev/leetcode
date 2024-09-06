function getCount(str: string) {
  const regex = /[aeiou]/gi;
  const count = str.match(regex);
  if (count) {
    return count.length;
  }
  return 0;
}

console.log(getCount('abracadabra'));
