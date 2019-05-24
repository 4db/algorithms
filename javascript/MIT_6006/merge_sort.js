/*
 * Time Complexity(O(nlogn))
 * Space Complexity(N) for recursive callstack
 *
 * @param array arr
 * @return sorted array
 */
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = parseInt(arr.length / 2),
  le = arr.slice(0, mid),
  ri = arr.slice(mid, arr.length);

  return recurstionMerge(mergeSort(le), mergeSort(ri));
}

/**
 * @param array le - left part of arr
 * @param array ri - right part of arr
 * @return sorted array
 */
const recurstionMerge = (le, ri) => {
  const res = [];

  while(le.length && ri.length) {
    res.push(le[0] < ri[0] ? le.shift() : ri.shift());
  }

  while(le.length) {
    res.push(le.shift());
  }

  while(ri.length) {
    res.push(ri.shift());
  }

  return res;
}

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

it('should sort empty array', [], []);

it('should sort already sorted array',
  [4, 6, 10, 12, 15, 23, 28, 35], [4, 6, 10, 12, 15, 23, 28, 35]);

it('should sort odd length array',
  [12, 15, 23, 4 , 6, 10, 35], [4, 6, 10, 12, 15, 23, 35]);

it('should sort one element', [15], [15]);

it('should sort two elements', [15, 12], [12, 15]);

it('should sort large list of elements',
  [12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60],
  [4, 6, 10, 12, 15, 23, 28, 35, 60, 75, 100, 111, 130, 222, 235, 333, 345, 444, 500, 554, 666, 777, 800, 888, 1000]);

it('should sort negative elements',
  [12, 15, -23, -4 , 6, 10, -35, 28], [-35, -23, -4, 6, 10, 12, 15, 28]);

it('should sort negative elements with duplicate elements',
  [12, 12, 23, 4 , 6, 6, 10, -35, 28], [-35, 4, 6, 6, 10, 12, 12, 23, 28]);
it('should sort same elements',
  [12, 12, 12, 12, 12], [12, 12, 12, 12, 12]);
