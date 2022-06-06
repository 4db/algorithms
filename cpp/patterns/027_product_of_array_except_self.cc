// Leetcode 238. Product of Array Except Self.
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {

        int len = nums.size();
        int from_begin = 1;
        int from_last = 1;
        vector<int> output(len, 1);
        
        for (int i=0; i < len; i++) {
            output[i]*=from_begin;
            from_begin*=nums[i];
        }
        
        for (int i = len-1; i>=0; i--) {
            output[i] *= from_last;
            from_last *= nums[i];
        }
        return output;
    }
};
