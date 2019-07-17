/* Find simple sum of all element in array */

function findSum(arr) {
  return arr.length === 0 ? 0 : arr.reduce((sum, a) => sum + a);
}

console.log('It should return 0:', findSum([]) === 0 ? 'PASS' : 'FAIL');
console.log('It should return 6:', findSum([1,2,3,0]) === 6 ? 'PASS' : 'FAIL');
console.log('It should return 4:', findSum([1,2,3,-2]) === 4 ? 'PASS' : 'FAIL');
console.log('It should return 0:', findSum([-1,1,0,0]) === 0 ? 'PASS' : 'FAIL');
