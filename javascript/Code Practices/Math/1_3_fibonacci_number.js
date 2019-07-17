/* Leetcode 509. Fibonacci Number */

/**
 * Iterative
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param number N
 * @return number
 */
function getFibonacciNumberIterative(N) {
  if (N <= 1) {
    return N;
  }
  let a = 0;
  let b = 1;
  let sum = null;

  while(N-- > 1) {
    sum = a + b;
    a = b;
    b = sum;
  }

  return b;
}
console.log('It should return 1', getFibonacciNumberIterative(2) === 1 ? 'PASS' : 'FAIL');
console.log('It should return 2', getFibonacciNumberIterative(3) === 2 ? 'PASS' : 'FAIL');
console.log('It should return 3', getFibonacciNumberIterative(4) === 3 ? 'PASS' : 'FAIL');
console.log('It should return 55', getFibonacciNumberIterative(10) === 55 ? 'PASS' : 'FAIL');

/**
 * Recursive
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 *
 * @param number N
 * @return number
 */
function getFibonacciNumberRecursive(N) {
  if (N <= 1) {
    return N;
  }
  return getFibonacciNumberRecursive(N - 1) + getFibonacciNumberRecursive(N - 2);
}
console.log('It should return 1', getFibonacciNumberRecursive(2) === 1 ? 'PASS' : 'FAIL');
console.log('It should return 2', getFibonacciNumberRecursive(3) === 2 ? 'PASS' : 'FAIL');
console.log('It should return 3', getFibonacciNumberRecursive(4) === 3 ? 'PASS' : 'FAIL');
console.log('It should return 55', getFibonacciNumberRecursive(10) === 55 ? 'PASS' : 'FAIL');

/**
 * Dynamic Programming - Bottom Up Approach
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param number N
 * @return number
 */
function getFibonacciNumberDPBottomUpApproach(N) {
  let fib_cache = [0, 1];
  for (let i = 2; i <= N; i++) {
      fib_cache.push(fib_cache[i - 2] + fib_cache[i - 1]);
  }
  return fib_cache[N];
}
console.log('It should return 1', getFibonacciNumberDPBottomUpApproach(2) === 1 ? 'PASS' : 'FAIL');
console.log('It should return 2', getFibonacciNumberDPBottomUpApproach(3) === 2 ? 'PASS' : 'FAIL');
console.log('It should return 3', getFibonacciNumberDPBottomUpApproach(4) === 3 ? 'PASS' : 'FAIL');
console.log('It should return 55', getFibonacciNumberDPBottomUpApproach(10) === 55 ? 'PASS' : 'FAIL');

