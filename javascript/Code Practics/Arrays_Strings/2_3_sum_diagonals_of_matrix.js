/* Given a square matrix, calculate the absolute difference between
 * the sums of its diagonals.
 */

/*
 * @param array
 * @return number
 */
function diagonalDifference(arr) {
  let leftD = 0;
  let rightD = 0;
  for (let i = 0; i < arr.length; i++) {
    leftD += arr[i][i];
    rightD += arr[i][arr.length - 1 - i];
  }
  return Math.abs(leftD - rightD);
}

const demo = [
  [11,2,4],
  [4,5,6],
  [10,8, -12]
];
console.log('It should return 15', diagonalDifference(demo) === 15 ? 'PASS' : 'FAIL');