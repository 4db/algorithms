/**
 * 153. Find Minimum|Maximum in Rotated Sorted Array
 * Suppose an array sorted in ascending order is rotated
 * at some pivot unknown to you beforehand.
 */

/*
 * Time Complexity - O(n);
 * Space Complexity - O(1);
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
 return Math.min(...nums);
}

/*
 * 
 * Time Complexity - O(n);
 * Space Complexity - O(1);
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
 return Math.max(...nums);
}

(() => {
  const test = 'Test';
  const it = ((description, input, expect) => {
    console.log(test + ' findMin ' + description + ':',
      findMin(input) === expect 
      ? 
      ' PASS'
      : ' FAIL');
  });
  it('should return 0 for 123 0', [1,2,3,0], 0);
  it('should return 0 for 0', [0], 0);
  it('should return 1 for 123456', [1,2,3,4,5,6], 1);
  it('should return -1 for 1234-156', [1,2,3,4,-1,5,6], -1);
})();

(() => {
  const test = 'Test';
  const it = ((description, input, expect) => {
    console.log(test + ' findMax ' + description + ':',
      findMax(input) === expect 
      ?
      ' PASS'
      : ' FAIL');
  });
  it('should return 3 for 123 0', [1,2,3,0], 3);
  it('should return 0 for 0', [0], 0);
  it('should return 6 for 123456', [1,2,3,4,5,6], 6);
  it('should return -1 for -3-4-1', [-3,-4,-1], -1);
})();
