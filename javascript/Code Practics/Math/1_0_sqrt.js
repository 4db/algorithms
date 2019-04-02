// Wikipedia article
// https://en.wikipedia.org/wiki/Methods_of_computing_square_roots

/*
 * 69. Sqrt(x)
 * Compute and return the square root of x,
 * where x is guaranteed to be a non-negative integer.
 * 
 * Since the return type is an integer,
 * the decimal digits are truncated and only 
 * the integer part of the result is returned.
 *
 * @param {number} x
 * @return {number}
 */
function squareRootsLeetCode(x){
  let left = 1, right = Math.floor(x / 2) + 1, mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
}
console.log('It should return squareRootsLeetCode(2)', squareRootsLeetCode(2) === 1 ? 'PASS' : 'FAIL');
console.log('It should return squareRootsLeetCode(8)', squareRootsLeetCode(8) === 2 ? 'PASS' : 'FAIL');
