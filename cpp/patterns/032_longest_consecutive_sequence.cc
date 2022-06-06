// Leetcode 128. Longest Consecutive Sequence.
class Solution {
public:
    int longestConsecutive(std::vector<int>& nums) {
        if (nums.size() == 0) {
            return 0;
        }
        std::sort(nums.begin(), nums.end());
        
        int longest = 0;
        int cur = 1;
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] == nums[i - 1]) {
                continue;
            }
            // Consecutive element - update current streak length
            if (nums[i] == nums[i - 1] + 1) {
                cur++;
            }
            else {
                longest = max(cur, longest);
                cur = 1; // reset current streak length
            }
        }
        return max(longest, cur);
    }
};
