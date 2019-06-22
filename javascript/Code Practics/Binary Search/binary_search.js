function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    const mid = parseInt((start + end) / 2);

    if (arr[mid] === value) {
      return mid;
    }

    if (arr[mid] < value) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log('It should return index 5 for element 9', binarySearch([1,2,3,6,7,9,15,25,34], 9) === 5 ? 'PASS' : 'FAIL');
console.log('It should return index 8 for element 34', binarySearch([1,2,3,6,7,9,15,25,34], 34) === 8 ? 'PASS' : 'FAIL');
console.log('It should return index 0 for element 1', binarySearch([1,2,3,6,7,9,15,25,34], 1) === 0 ? 'PASS' : 'FAIL');
console.log('It should return -1 for element 4', binarySearch([1,2,3,6,7,9,15,25,34], 4) === -1 ? 'PASS' : 'FAIL');
