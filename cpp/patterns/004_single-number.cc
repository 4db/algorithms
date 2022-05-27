// Leetcode 136. Single Number.
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        const int len = nums.size();
        for (int i = 1; i<len; i += 2) { //i += 2 step.
            if (nums[i] != nums[i-1]) {
                return nums[i-1];
            }
        }
        return nums[len -1];
    }
};
