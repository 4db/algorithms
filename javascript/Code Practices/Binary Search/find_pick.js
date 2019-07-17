/**
 * Find any local maximum pick index in array.
 *
 * Time Complexity O(logn)
 *
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  let right = nums.length -1;
  let left = 0;

  while(left < right) {
    const mid = left + (right - left) / 2;
    if (nums[mid] < nums[mid + 1]) {
        left = mid + 1;
    } else {
        right = mid;
    }
  }
  return left;
};

console.log('It should return index 1 for pick value 2', findPeakElement([1,2,3,1]) === 1 ? 'PASS' : 'FAIL');
console.log('It should return index 5 for pick value 6', findPeakElement([1,2,1,3,5,6,4]) === 1 ? 'PASS' : 'FAIL');
