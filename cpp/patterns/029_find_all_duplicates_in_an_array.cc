// Leetcode 442. Find All Duplicates in an Array.
class Solution {
public:
    // Not optimal with extra space, unordered_set, O(nlogn), O(n) space.
    vector<int> findDuplicates(vector<int>& nums) {
      std::unordered_set<int> s;
      std::vector<int> output;
      for (int& num : nums) {
          // Find  O(log n).
          if (s.find(num) != s.end()) {
              output.push_back(num);
          }
          else {
              s.insert(num);
          }
      }
      return output;
    }
    // Idea - Take An unordered_map To store frequency Of each Element And Return those Having Frequency 2. O(n), O(n) space
    vector<int> findDuplicates(vector<int>& nums) {
        std::vector<int> output;
        unordered_map<int,int> mp;
        for(int num : nums) {
          mp[num]++;
        }
      
        for (auto it : mp) {
          if (it.second==2) {
            output.push_back(it.first);
          }
        }
        return output;
    }
    // Faster solution with O(n) and O(1) space.
        vector<int> findDuplicates(vector<int>& nums) {
        std::vector<int> output;
        for (int i=0;i<nums.size();i++) {
            const int value = abs(nums[i]);
            if (nums[value -1] < 0) {
                output.push_back(value);
            }
            nums[value - 1] =-nums[value - 1];
        }
        return output;
    }
};
