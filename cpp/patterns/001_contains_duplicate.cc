// This is solition for https://leetcode.com/problems/contains-duplicate, e.x:
// Given an int array nums, return true if any value appears at least twice in the array.
class Solution {
public:
    // std::unordered_set(On) faster then std::set(OlogN).
    bool containsDublicateOneLine(vector<int>& nums) {
      return nums.size() > std::unordered_set<int>(nums.begin(), nums.end()).size();
    }
    // Faster solution without extra memory.
    bool containsDuplicate(vector<int>& nums) {      
        std::sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size() - 1; i++) {
            if (nums[i+1] == nums[i]) {
                return true;
            }
        }
        return false;
    }
};
