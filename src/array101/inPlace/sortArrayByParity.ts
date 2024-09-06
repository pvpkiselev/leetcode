function sortArrayByParity(nums: number[]): number[] {
  const even: number[] = [];
  const odd: number[] = [];

  nums.forEach((num) => {
    if (num % 2 !== 0) {
      odd.push(num);
    } else {
      even.push(num);
    }
  });

  const sortedEven: number[] = even.sort((a, b) => a - b);
  const sortedOdd: number[] = odd.sort((a, b) => a - b);

  const result: number[] = [...sortedEven, ...sortedOdd];
  return result;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
