function binarySearchClosestIndex(arr, v) {
  if (v < arr[0]) {
  return 0;
  }

  if (v > arr[arr.length - 1]) {
    return arr.length - 1;
  }
 
  let start = 0;
  let end = arr.length;

  while(start <= end) {
   const mid = parseInt((start + end) / 2);

   if (arr[mid] === v) {
     return mid;
   }

   if (arr[mid] < v) {
     start++;
   }
   else {
     end--;
   }
  }

  return (arr[start] - v) < (v - arr[end]) ? start : end;
}

console.log('It should return index 5 for search value  9', binarySearchClosestIndex([1,2,3,6,7,9,15,25,34], 9) === 5 ? 'PASS' : 'FAIL');
console.log('It should return index 8 for search value  34', binarySearchClosestIndex([1,2,3,6,7,9,15,25,34], 34) === 8 ? 'PASS' : 'FAIL');
console.log('It should return index 0 for search value  1', binarySearchClosestIndex([1,2,3,6,7,9,15,25,34], 1) === 0 ? 'PASS' : 'FAIL');
console.log('It should return index 2(of element 3) for search value  4', binarySearchClosestIndex([1,2,3,6,7,9,15,25,34], 4) === 2 ? 'PASS' : 'FAIL');
console.log('It should return index 0(of element 1) for search value  -1', binarySearchClosestIndex([1,2,3,6,7,9,15,25,34], -1) === 0 ? 'PASS' : 'FAIL');
console.log('It should return index 8(of element 34) for search value  35', binarySearchClosestIndex([1,2,3,6,7,9,15,25,34], 35) === 8 ? 'PASS' : 'FAIL');
