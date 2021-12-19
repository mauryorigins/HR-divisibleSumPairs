/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
import divisibleSumPairs from './divisibleSumPairs';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1, 3, 2, 6, 1, 2];
  const result = divisibleSumPairs(6, 3, testArray);
  console.log('Result: ', result);
}

main();
