/*
 * Time Complexity O(n^2)
 * Space Complexity O(logn)
 *
 * @param {array} arr
 * @param {array} left
 * @param {array} right
 */
function quickSort(arr, left, right) {
  if (arr.length <= 1) {
    return arr;
  }

  let index;
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

function swap(arr, key, secondKey) {
  let temp = arr[key];
  arr[key] = arr[secondKey];
  arr[secondKey] = temp;
}

function getPivot(arr, left, right) {
  let pivot = arr[parseInt((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
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
