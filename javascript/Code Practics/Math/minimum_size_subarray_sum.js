/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(s, nums) {
  let min = Number.MAX_VALUE;

  // boundaries
  let l = 0;
  let r = -1;

  // current sum
  let sum = 0;

  while (r < nums.length) {
    if (sum >= s) {
      min = Math.min(min, r - l + 1);
      sum -= nums[l];
      l++;
      continue;
    }
    r++;
    sum += nums[r];
  }

  return min === Number.MAX_VALUE ? 0 : min;
}
