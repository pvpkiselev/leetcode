function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) {
    return false;
  }

  const max = Math.max(...arr);
  const indexOfMax = arr.indexOf(max);

  if (indexOfMax === arr.length - 1 || indexOfMax === 0) {
    return false;
  }

  for (let i = 0; i < indexOfMax; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }

  for (let i = arr.length - 1; i > indexOfMax; i--) {
    if (arr[i] >= arr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(validMountainArray([1, 2, 3, 4]));
