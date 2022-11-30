// 424. Longest Repeating Character Replacement

class Solution {
public:
    // Time: O(n).
    // Space: O(1).
    int characterReplacement(string s, int k) {
        if (s.size() == 0) {
            return 0;
        }

        std::vector<int> abc(128);

        // Initialize largestCount & beg pointer...
        int beg = 0, largestCount = 0;

        for (int i = 0; i < s.size(); i++) {
            largestCount = std::max(largestCount, ++abc[s[i]]);
            if (i - beg + 1 - largestCount > k) {
                abc[s[beg++]]--;
            }
        }
        return s.length() - beg;
    }
};
