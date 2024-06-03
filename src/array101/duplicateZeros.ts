function duplicateZeros(arr: number[]) {
  const length = arr.length;
  arr = arr.reduce((acc: number[], current, i, array) => {
    acc.push(current);
    if (array[i] === 0) {
      acc.push(0);
    }
    return acc.slice(0, length);
  }, []);
  return arr;
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
