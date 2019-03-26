/*
 * 303. Range Sum Query - Immutable
 * Given an integer array nums, find the sum of the elements 
 * between indices i and j (i ≤ j), inclusive.
 */

class NumArray {
  constructor(nums) {
    this.arr = nums;
  }

  sumRange(i, j) {
    let acc = 0;
    for (let k = i; k <= j; k++) {
       acc = !this.arr[k] ? acc : acc + this.arr[k];
    }
    return acc;
  }
}

var arr = new NumArray([-2,0,3,-5,2-1]);

console.log('It should return 1', arr.sumRange(0, 2), arr.sumRange(0, 2) === 1 ? 'PASS' : 'FAIL');
console.log('It should return -1', arr.sumRange(2, 5), arr.sumRange(2, 5) === -1 ? 'PASS' : 'FAIL');
console.log('It should return -3', arr.sumRange(0, 5), arr.sumRange(0, 5) === -3 ? 'PASS' : 'FAIL');
