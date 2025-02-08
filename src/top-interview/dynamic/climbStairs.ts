// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const cache: number[] = [];

function climbStairs(n: number): number {
  if (n <= 3) {
    return n;
  }

  if (!cache[n]) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }

  return cache[n];
}

console.log(climbStairs(4));
