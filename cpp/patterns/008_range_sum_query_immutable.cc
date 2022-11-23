// Leetcode 303. Range Sum Query - Immutable.
// Given an integer array nums, handle multiple queries of the following type:
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

class NumArray {
public:
    NumArray(std::vector<int> &nums) {
        accu.push_back(0);
        for (int num : nums) {
            accu.push_back(accu.back() + num);
        }
    }

    int sumRange(int i, int j) {
        return accu[j + 1] - accu[i];
    }
private:
    std::vector<int> accu;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */
