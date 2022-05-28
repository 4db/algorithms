// Leetcode. 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max_sum = nums[0];
        int cur_sum = nums[0];
        for (int i = 1; i < int(nums.size()); i++) {
            cur_sum = std::max(cur_sum + nums[i], nums[i]);
            max_sum = std::max(cur_sum, max_sum);
        }
        
        return max_sum;
    }
};
