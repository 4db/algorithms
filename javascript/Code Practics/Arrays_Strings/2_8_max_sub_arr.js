/*
 * 53. Maximum Subarray
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest sum and return its sum.
 */
function maxSubArray(arr) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (var i = 0; i < arr.length; i++) {
    prev = Math.max(prev + arr[i], arr[i]);
    max = Math.max(max, prev);
  }
  return max;
}

console.log('It should return 6', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) == 6)
