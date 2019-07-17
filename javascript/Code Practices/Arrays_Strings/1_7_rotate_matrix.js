/*
 * Rotate Matrix: Given an image represented by an NxN matrix, 
 * where each pixel in the image is 4 bytes, write a method to 
 * rotate the image by 90 degrees. Can you do this in place?
 */

/*
 * Time Complexity O(N 2)
 * Space Complexity O(1)
 *
 * @param array([][]) matrix
 * @return array([][])
 */
function rotateMatrix(matrix) {
  const size = matrix[0].length;
  const swap = function(matrix, x, y) {
    const temp = matrix[x][y];
    matrix[x][y] = matrix[y][size-1-x];
    matrix[y][size-1-x] = matrix[size-1-x][size-1-y];
    matrix[size-1-x][size-1-y] = matrix[size-1-y][x];
    matrix[size-1-y][x] = temp;
  }

  for (let x = 0; x < size / 2; x++ ) {
    for (let y = x; y < size - x - 1; y ++) {
      swap(matrix, x, y);
    }
  }
  return matrix;
}

(() => {
  const test = 'Test rotateMatrix ';
  const it = ((description, input, expect) => {
    console.log(
      test + description + ': ', rotateMatrix(input),
      JSON.stringify(rotateMatrix(input)) === JSON.stringify(expect) ? 'PASS' : 'FAIL'
    );
  });

  it('should rotate a 3x3 matrix',
    [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],
    [
      [9,8,7],
      [6,5,4],
      [3,2,1]
    ]);
})();