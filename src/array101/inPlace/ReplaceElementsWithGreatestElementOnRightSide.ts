function replaceElements(arr: number[]): number[] {
  const lastIndex = arr.length - 1;

  let currentMax = -1;

  for (let i = lastIndex; i >= 0; i--) {
    const current = arr[i];
    arr[i] = currentMax;

    if (current > currentMax) {
      currentMax = current;
    }
  }

  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
