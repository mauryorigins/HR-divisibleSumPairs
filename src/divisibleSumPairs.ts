/* eslint-disable no-plusplus */
export default function divisibleSumPairs(n: number, k: number, ar: number[]): number {
// Write your code here
  let pars = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (((ar[i] + ar[j]) % k === 0) && i < j) {
        pars += 1;
      }
    }
  }
  return pars;
}
