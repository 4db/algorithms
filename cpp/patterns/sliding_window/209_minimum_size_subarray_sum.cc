// https://leetcode.com/problems/minimum-size-subarray-sum/description/
// Leetcode 209.
class Solution {
public:
    // Time complexity: O(n).
    // Space complexity: O(1) O(1) O(1) extra space.
    int minSubArrayLen(int target, std::vector<int>& nums) {

    int ans = INT_MAX;
    int left = 0;
    int sum = 0;
    for (int i = 0; i < nums.size(); i++) {
        sum += nums[i];
        while (sum >= target) {
            ans = min(ans, i + 1 - left);
            sum -= nums[left++];
        }
    }
    return (ans != INT_MAX) ? ans : 0;
    }
};
