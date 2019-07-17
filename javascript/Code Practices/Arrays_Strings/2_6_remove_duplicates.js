/*
 * 26. Remove Duplicates from Sorted Array
 *
 * @param {array} arr
 * @return {array}
 */
function removeDuplicates(arr) {
  return arr.reduce((accumulator, currentValue, currentIndex) => {
    return currentValue === arr[currentIndex + 1] ? accumulator : accumulator + 1;
  }, 0); 
}

console.log('It should return 2', removeDuplicates([1,1,2]) === 2 ? 'PASS' : 'FAIL');
console.log('It should return 5', removeDuplicates([0,0,1,1,1,2,2,3,3,4]) === 5 ? 'PASS' : 'FAIL');
