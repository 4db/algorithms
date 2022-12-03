// Leetcode 3. Longest Substring Without Repeating Characters
// Time: O(n).
// Space: O(256) => O(1).
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        std::vector<int> dict(256, -1);
        int maxLen = 0, start = -1;
        for (int i = 0; i != s.size(); i++) {
            if (dict[s[i]] > start) {
                start = dict[s[i]];
            }
            dict[s[i]] = i;
            maxLen = std::max(maxLen, i - start);
        }
        return maxLen;
    }
};
