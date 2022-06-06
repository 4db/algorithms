// Leetcode 287. Find the Duplicate Number.
class Solution {
public:
    // Not optimal solution, nlogn
    int findDuplicate(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int len = nums.size();
        for (int i = 1; i < len; i++) {
            if (nums[i] == nums[i-1]) {
                return nums[i];
            }
        }
        return - 1;
    }

    // BST logn.
    int findDuplicateBST(vector<int>& nums) {
        int low = 1, high = nums.size() - 1, count_elements;
        
        while (low <=  high) {
            int mid = low + (high - low) / 2;
            count_elements = 0;

            // count_elements number less than equal to mid.
            for(int n : nums) {
                if (n <= mid) {
                    ++count_elements;
                }
            }

            // binary search on left
            if (count_elements <= mid) {
                low = mid + 1;
            }
            // binary search on right
            else {
                high = mid - 1;
            }
        }
        return low;
    }
};
