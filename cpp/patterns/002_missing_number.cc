// Binary search solution of https://leetcode.com/problems/missing-number.
class Solution {
public:
    int missingNumber(std::vector<int>& nums) {
        std::sort(nums.begin(), nums.end());

        int l = 0, r = nums.size(), m = (l + r) / 2;

        while (l < r ) {
            m = (l + r) / 2;
            if (nums[m] > m) {
                r = m;
            }
            else {
                l = m + 1;
            }
        }
        return l;
    }
};
