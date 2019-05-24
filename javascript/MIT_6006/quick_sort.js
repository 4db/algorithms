/*
 * Time Complexity O(n^2)
 * Space Complexity O(logn)
 *
 * @param {array} arr
 * @param {array} left
 * @param {array} right
 */
function quickSort(arr, left, right) {
  let index;
  if (arr.length <= 1) {
    return arr;
  }

  left  = left === undefined ? 0 : left;
  right = right === undefined ? arr.length - 1 : right;
  index = getPivot(arr, left, right);
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }

  if (index < right) {
    quickSort(arr, index, right);
  }

  return arr;
}

/*
 * @param {array} arr
 * @param {integer} left
 * @param {integer} right
 */
function getPivot(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];

  while(left <= right) {
    while(arr[left] < pivot) {
      left++;
    }

    while(arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

/*
 * @param {array} arr
 * @param {string|int} key
 * @param {string|int} secondKey
 */
function swap(arr, key, secondKey) {
  let temp = arr[key];
  arr[key] = arr[secondKey];
  arr[secondKey] = temp;
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
