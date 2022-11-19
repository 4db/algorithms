// Leetcode 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

class Solution {
public:
    vector<int> findDisappearedNumbers(std::vector<int>& nums) {
        int len = nums.size();
        for (int i=0; i < len; i++) {
            int m = abs(nums[i])-1; // index start from 0
            nums[m] = nums[m]>0 ? -nums[m] : nums[m]; // Overwrite to save memory.
        }
        std::vector<int> res;
        for (int i = 0; i < len; i++) {
            if (nums[i] > 0) res.push_back(i+1);
        }
        return res;
    }
};

// Not optimal solution with std::set.
class Solution {
public:
    std::vector<int> findDisappearedNumbers(std::vector<int>& nums) {
        std::vector<int> result;
        std::set<int> s {std::begin(nums), std::end(nums)};
        
        for (int i = 1; i < nums.size() + 1; i++) {
            //!s.contains(i) C++ 20
            if (s.count(i) == 0) {
                result.push_back(i);
            }
        }
        return result;
    }
};
