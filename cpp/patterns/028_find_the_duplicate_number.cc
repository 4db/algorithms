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

    // Fast and Slow, O(n).
    int findDuplicateFastAndSlow(vector<int>& nums) {
		int slow = nums[0];
		int fast = nums[nums[0]];
		while (slow != fast) {
			slow = nums[slow];
			fast = nums[nums[fast]];
		}

		fast = 0;
		while (fast != slow) {
			fast = nums[fast];
			slow = nums[slow];
		}
		return slow;
    }
};
