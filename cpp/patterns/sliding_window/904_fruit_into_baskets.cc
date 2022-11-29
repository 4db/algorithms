// Leetcode:  904 https://leetcode.com/problems/fruit-into-baskets/solutions/
// Sliding Window for K Elements
// Find out the longest length of subarrays with at most 2 different numbers?

class Solution {
public:
    int totalFruit(std::vector<int> &tree) {
        std::unordered_map<int, int> mp;
        int i, j;
        for (i = 0, j = 0; j < tree.size(); ++j) {
            mp[tree[j]]++;
            if (mp.size() > 2) {
                if (--mp[tree[i]] == 0) {
                    mp.erase(tree[i]);
                }
                i++;
            }
        }
        return j - i;
    }
};
