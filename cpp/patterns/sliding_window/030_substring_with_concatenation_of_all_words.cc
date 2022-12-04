// Leetcode 30. Substring with Concatenation of All Words.
// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
// Time O(n).
// Space O(1).
class Solution {
public:
    std::vector<int> findSubstring(std::string s, std::vector<std::string>& words) {
        // Expected times of each word.
        std::unordered_map<std::string, int> cnt; 
        for (auto &w : words) {
            cnt[w]++;
        }
        int n = words.size();
        int k = words[0].size();
        std::vector<int> res;
        // Visited times of each word during the loop starting from i.
        for(int i = 0; i + n * k <= s.size(); i++) {
            std::unordered_map<std::string, int> seen; 
            for(int j = 0; j < n; j++){
                std::string str = s.substr(i + j * k, k); 
                seen[str]++;
                // If for any words, visited times > expected times, then we stop the check. 
                if (seen[str] > cnt[str]) {
                    break;
                }
                // If all pass, we know i is one of the valid start index.
                if (j == n - 1) {
                    res.push_back(i); 
                }
            }
        }
        return res;      
    }
};
