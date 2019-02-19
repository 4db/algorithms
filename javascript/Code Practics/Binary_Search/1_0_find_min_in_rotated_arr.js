/**
 * 153. Find Minimum in Rotated Sorted Array
 * Suppose an array sorted in ascending order is rotated
 * at some pivot unknown to you beforehand.
 */

/*
 * Binary Search
 * Time Complexity - O(logn);
 * Space Complexity - O(1);
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var lo = 0;
  var hi = nums.length -1;
    while (lo < hi) {
      var mid = lo + (hi-lo) / 2 | 0;
      if (nums[mid] < nums[hi]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return nums[lo];
}
