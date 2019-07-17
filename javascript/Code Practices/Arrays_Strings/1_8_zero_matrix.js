/*
 * Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its 
 * entire row and column are set to 0.
 */

//TODO
function modifyMatrix(matrix) {
  const x = 2;
  const y = 2;

  const row = [];
  const col = [];

  for (i = 0; i < x; i++) { 
      row[i] = 0; 
  }

  for (i = 0; i < y; i++) { 
      col[i] = 0; 
  }

  for (i = 0; i < x; i++) {
    for (j = 0; j < y; j++) {
      if (matrix[i][j] === 1) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (i = 0; i < x; i++) {
    for (j = 0; j < y; j++) {
      if (row[i] === 1 || col[j] === 1 ) {
        matrix[i][j] = 1;
      }
    }
  }
  return matrix;
}

(() => {
  const test = 'Test modifyMatrix ';
  const it = ((description, input, expect) => {
    console.log(
      test + description + ': ', modifyMatrix(input),
      JSON.stringify(modifyMatrix(input)) === JSON.stringify(expect) ? 'PASS' : 'FAIL'
    );
  });

  it('should update zero for 2x2 matrix',
    [
      [1, 0],
      [0, 0]
    ],
    [
      [1, 1],
      [1, 0]
    ]);

  it('should update zero for 3x4 matrix',
    [
      [1, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 1],
    ]);
})();