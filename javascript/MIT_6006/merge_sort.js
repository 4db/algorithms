/*
 * Time Complexity(O(nlogn))
 * Space Complexity(N)
 *
 * @param array arr
 * @return sorted array
 */
function mergeSort(arr) {
  if (arr.length < 2) {
      return arr;
  }

  const mid = parseInt(arr.length / 2),
  left = arr.slice(0, mid),
  right = arr.slice(mid, arr.length);

  return (function merge(left, right) {
    const res = [];
    while(left.length && right.length) {
      res.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    while(left.length) {
      res.push(left.shift());
    }

    while(right.length) {
      res.push(right.shift());
    }

    return res;
  })(mergeSort(left), mergeSort(right));
}


(() => {
  const test = 'Test mergeSort';
  const it = ((description, input, expect) => {
    console.log(
      test + description + ': ',
      JSON.stringify(mergeSort(input))
        === JSON.stringify(expect) ? 'PASS' : 'FAIL'
    );
  });

  it('should sort even number of elements',
    [12, 15, 23, 4 , 6, 10, 35, 28], [4, 6, 10, 12, 15, 23, 28, 35]);

  it('should sort empty array',
    [], []);

  it('should sort already sorted array',
    [4, 6, 10, 12, 15, 23, 28, 35], [4, 6, 10, 12, 15, 23, 28, 35]);

  it('should sort odd length array',
    [12, 15, 23, 4 , 6, 10, 35], [4, 6, 10, 12, 15, 23, 35]);

  it('should sort one element',
    [15], [15]);

  it('should sort two elements',
    [15, 12], [12, 15]);

  it('should sort large list of elements',
    [12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60],
    [4, 6, 10, 12, 15, 23, 28, 35, 60, 75, 100, 111, 130, 222, 235, 333, 345, 444, 500, 554, 666, 777, 800, 888, 1000]);

  it('should sort negative elements',
    [12, 15, -23, -4 , 6, 10, -35, 28], [-35, -23, -4, 6, 10, 12, 15, 28]);

  it('should sort negative elements with duplicate elements',
    [12, 12, 23, 4 , 6, 6, 10, -35, 28], [-35, 4, 6, 6, 10, 12, 12, 23, 28]);
  it('should sort same elements',
    [12, 12, 12, 12, 12], [12, 12, 12, 12, 12]);
})();