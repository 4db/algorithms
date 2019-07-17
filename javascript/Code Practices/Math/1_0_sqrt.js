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

/*
 * 
 * @param {number} x
 * @return {number}
 */
function sqrt(x){
  let left = 0, right = x, mid;
  for(let i = 0 ; i < 1000 ; i++){
    mid = (left + right) / 2;
    if (mid * mid == x) {
      return mid;
    }
    if (mid * mid > x) {
      right = mid;
    }
    else {
      left = mid;
    }
  }
  return mid;
}
console.log('It should return sqrt(2)', sqrt(2) === 1.414213562373095 ? 'PASS' : 'FAIL');
console.log('It should return sqrt(8)', sqrt(8) === 2.828427124746190 ? 'PASS' : 'FAIL');
