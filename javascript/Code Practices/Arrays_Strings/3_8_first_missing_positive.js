/**
 * 41. First Missing Positive
 * Given an unsorted integer array, find the smallest missing positive integer.
 * Your algorithm should run in O(n) time and uses constant extra space.
 *
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  if (nums === null || nums.length === 0) {
    return 1;
  }
  const len = nums.length + 1;
  for (let i = 0; i < nums.length; i++) {
    // delete those useless elements
    if (nums[i] < 0 || nums[i] >= len) {
      nums[i] = 0;
    }
  }
  let s = 0;
  // use the index as the hash to record the frequency of each number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % len == nums.length) {
      s += len;
    } else {
      nums[nums[i] % len] += len;
    }
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < len) {
      return i;
    }
  }
  if (s < len) {
    return len - 1;
  }
  return len;
}

console.log('It should return 1', firstMissingPositive([0,3]) === 1 ? 'PASS' : 'FAIL');
console.log('It should return 2', firstMissingPositive([3,4,-1,1]) === 2 ? 'PASS' : 'FAIL')
