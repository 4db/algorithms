/*
 * Zero Matrix: Write an algorithm such that if an element 
 * in an MxN matrix is 0, its entire row and column are set to 0.
 * @param array mat
 * @param number R
 * @param number C
 * @return array mat
 */
function modifyMatrix(mat, R, C) {
  let row = Array(R).fill(0);
  let col = Array(C).fill(0);

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (mat[i][j] == 1) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if ( row[i] == 1 || col[j] == 1 ) {
        mat[i][j] = 1;
      }
    }
  }
  return mat;
}

const expectOutput = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
];

console.log('Test modifyMatrix should update zero for 3x4 matrix', 
  JSON.stringify(modifyMatrix(
    [
      [1, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    3,
    4)
  ) === JSON.stringify(expectOutput) ? 'PASS' : 'FAIL'
);