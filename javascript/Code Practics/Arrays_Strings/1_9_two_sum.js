/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
}


(() => {
  const test = 'Test twoSum ';
  const it = ((description, nums, target, expect) => {
    console.log(
      test + description + ': ',
      JSON.stringify(twoSum(nums, target))
        === JSON.stringify(expect) ? 'PASS' : 'FAIL'
    );
  });
  it('should return [1,0]', [2, 7, 11, 15], 9, [1,0]);
})();