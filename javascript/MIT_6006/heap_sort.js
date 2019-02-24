
/*
 * Time complexity O(nlogn)
 * Space complexity O(1)
 * 
 * @param array arr
 * @return sorted array
 */
function heapSort(arr) {
  let arrLen = arr.length;
  const heapRoot = function (arr, i) {
    let max   = i;
    const left  = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < arrLen && arr[left] > arr[max]) {
      max = left;
    }

    if (right < arrLen && arr[right] > arr[max]) {
      max = right;
    }

    if (max != i) {
      swap(arr, i, max);
      heapRoot(arr, max);
    }
  }

  for (let i = Math.floor(arrLen / 2); i >= 0; i -= 1) {
    heapRoot(arr, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    arrLen--;
    heapRoot(arr, 0);
  }

  return arr;
};

/*
 * @param array arr
 * @param number keyA
 * @param number keyB
 */
function swap(arr, keyA, keyB) {
  const temp = arr[keyA];
  arr[keyA] = arr[keyB];
  arr[keyB] = temp;
}


(() => {
  const test = 'Test heapSort';
  const it = ((description, input, expect) => {
    console.log(
      test + description + ': ',
      JSON.stringify(heapSort(input))
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