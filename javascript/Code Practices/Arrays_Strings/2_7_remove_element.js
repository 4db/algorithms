/*
 * 27. Remove Element
 *
 * Given an array nums and a value val, 
 * remove all instances of that value in-place and return the new length.
 *
 * @param {array} arr
 * @param {number} el
 * @return {number}
 */
function removeElement(arr, el) {
  const start = arr.indexOf(el);
  const end = arr.lastIndexOf(el);
  let count = 0;
  for (let k = start; k <= end; k++) {
    if (arr[k] == el) {
      count = count + 1;
    }
  }
  return arr.length - count;
}

console.log('It should return 2', removeElement([3,2,2,3], 2), removeElement([3,2,2,3], 2) === 2 ? 'PASS' : 'FAIL');
console.log('It should return 5', removeElement([0,1,2,2,3,0,4,2], 2), removeElement([0,1,2,2,3,0,4,2], 2) === 5 ? 'PASS' : 'FAIL');
