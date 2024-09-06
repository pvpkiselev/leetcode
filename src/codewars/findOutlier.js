function findOutlier(integers) {
  const even = integers.filter((num) => num % 2 === 0);
  const odd = integers.filter((num) => num % 2 !== 0);

  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
