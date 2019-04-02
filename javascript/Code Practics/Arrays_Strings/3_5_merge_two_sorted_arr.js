/**
 * 88. Merge Sorted Array
 * Given two sorted integer arrays nums1 and nums2,
 * merge nums2 into nums1 as one sorted array.
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let len = m + n;
  m--;
  n--;
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--];
    } else {
      nums1[len] = nums2[n--];
    }
  }
};

const TEST_ARR = [1,2,3,0,0,0];
merge(TEST_ARR, 3, [2,5,6], 3);
console.log('It should return [1,2,2,3,5,6]', TEST_ARR);
