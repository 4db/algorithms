/*
 * Time Complexity O(n^2)
 * Space Complexity O(logn)
 *
 * @param {array} arr
 * @param {array} le left part
 * @param {array} ri rigt part
 */
function quickSort(arr, le, ri) {
  if (arr.length <= 1) {
    return arr;
  }
  le = !le ? 0 : le;
  ri = !ri ? arr.length - 1 : ri;
  let i = getPivot(arr, le, ri);

  if (le < i - 1) {
    quickSort(arr, le, i - 1);
  }

  if (i < ri) {
    quickSort(arr, i, ri);
  }
  return arr;
}

/*
 * @param {array} arr
 * @param {integer} le left value
 * @param {integer} ri right value
 */
function getPivot(arr, le, ri) {
  let pivot = arr[Math.floor((le + ri) / 2)];

  while (le <= ri) {
    while (arr[le] < pivot) {
      le++;
    }

    while (arr[ri] > pivot) {
      ri--;
    }

    if (le <= ri) {
      swap(arr, le, ri);
      le++;
      ri--;
    }
  }
  return le;
}

/*
 * @param {array} arr
 * @param {string|int} keyA
 * @param {string|int} keyB
 */
function swap(arr, keyA, keyB) {
  let temp = arr[keyA];
  arr[keyA] = arr[keyB];
  arr[keyB] = temp;
}

const test = 'Test quickSort';
const it = ((description, input, expect) => {
  console.log(
    test + description + ': ',
    JSON.stringify(quickSort(input))
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
