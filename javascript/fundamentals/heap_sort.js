/*
 * Time complexity O(nlogn)
 * Space complexity O(1)
 * 
 * @param array arr
 * @return sorted array
 */
function heapSort(arr) {
  let heapSize = arr.length;

  // Create a functions in scope, to use local referenses heapSize and arr
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  const heapRoot = function (i) {
    let max   = i;
    const left  = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < heapSize && arr[left] > arr[max]) {
      max = left;
    }

    if (right < heapSize && arr[right] > arr[max]) {
      max = right;
    }

    if (max != i) {
      swap(i, max);
      heapRoot(max);
    }
  }

  for (let i = parseInt(heapSize / 2); i >= 0; i -= 1) {
    heapRoot(arr, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(0, i);
    heapSize--;
    heapRoot(0);
  }

  return arr;
}
