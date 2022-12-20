// Leetcode: https://leetcode.com/problems/find-all-anagrams-in-a-string/.

// Time complexity: O(nk) where n = size of s and k is size of substring of s
// Memory complexity: O(k).
class Solution {
public:
    std::vector<int> findAnagrams(std::string s, std::string p) {
        std::unordered_map<char, int> freq_p_mp, mp;
        std::vector<int> arr;
        if (p.size() > s.size()) {
            return arr;
        }

        for (int i = 0; i < p.size(); i++) {
            freq_p_mp[p[i]]++;
            mp[s[i]]++;
        }

        if (freq_p_mp == mp) {
            arr.push_back(0);
        }

        for (int i = p.size(); i < s.size(); i++) {
            mp[s[i]]++;
            mp[s[i - p.size()]]--;
            if (mp[s[i - p.size()]] <= 0) {
                mp.erase(s[i - p.size()]);
            }

            if (freq_p_mp == mp) {
                arr.push_back(i - p.size() + 1);
            }
        }
        return arr;

    }
};

// Time Complexity = O(n * 26) = O(n), where n = size of s and 26 => abc.
// Space Complexity = O(26) = O(1).
class Solution {
public:
    std::vector<int> findAnagrams(std::string s, std::string p) {
        int s_len = s.size();
        int p_len = p.size();

        if (s.size() < p.size()) {
            return {};
        }

        std::vector<int> freq_p(26, 0);
        std::vector<int> window(26, 0);

        // First window.
        for (int i = 0; i < p_len; i++) {
            // To convert a character to its integer representation using this method,
            // we subtract the ASCII value of 'a' from the character. This is because the ASCII
            // value for 'a' is 97, and using it as an index allows us to represent a character as an integer.
            // For instance, the ASCII value for 'b' is 98, and subtracting 'a' (which has an ASCII value of 97)
            // gives us an integer representation of 1. Similarly, the ASCII value for 'c' is 99,
            // which becomes 2 when 'a' is subtracted.
            freq_p[p[i] - 'a']++;
            window[s[i] - 'a']++;
        }

        std::vector<int> ans;
        if (freq_p == window) {
            ans.push_back(0);
        }

        for (int i = p_len; i < s_len; i++) {
            window[s[i - p_len] - 'a']--;
            window[s[i] - 'a']++;

            if (freq_p == window) {
                ans.push_back(i - p_len + 1);
            }
        }
        return ans;
    }
};
