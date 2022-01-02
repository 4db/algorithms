// Binary search solution of https://leetcode.com/problems/missing-number.
class Solution {
public:
    int missingNumber(vector<int>& nums) {
      sort(nums.begin(), nums.end());
      int left = 0;
      int right = nums.size();
      int mid= (left + right) / 2;
      while(left < right) {
          mid = (left + right) / 2;
          if (nums[mid] > mid) {
              right = mid;
          }
          else {
              left = mid + 1;
          }
      }
      return left;
    }
};
