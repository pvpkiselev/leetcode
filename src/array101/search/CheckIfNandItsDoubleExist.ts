function checkIfExist(arr: number[]): boolean {
  const hash = new Set<number>();

  for (let i = 0; i <= arr.length; i++) {
    if (hash.has(arr[i] / 2) || hash.has(arr[i] * 2)) {
      return true;
    } else {
      hash.add(arr[i]);
    }
  }

  return false;
}

console.log(checkIfExist([10, 2, 5, 3]));
