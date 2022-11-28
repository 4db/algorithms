// Leetcode 567. Permutation in String.
// https://leetcode.com/problems/permutation-in-string/description/
// This problem is very similar to "Find All Anagrams to a String" https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Time: O(n).
// Space: O(n).
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        // Create a new hashmap to store frequncies of all characters in s1.
        std::unordered_map<char, int> hash;
        for (auto it : s1) {
            hash[it]++;
        }

        int count = hash.size();
        int i = 0, j = 0;
        while(j < s2.size()) {
            if (hash.find(s2[j]) != hash.end()) {
                // If a character is found that already exists in the map, reduce its frequency by one.
                hash[s2[j]]--;

                if (hash[s2[j]] == 0) {
                // If the frequency of a specific character on the map is 0, it means that all occurrences
                // of that character is found inside the current window size.
                    count--;
                }
            }
            if (j-i+1 < s1.size()) {
                j++;
            }
            else if (j-i+1 == s1.size()) {
                if (count == 0){
                    // Anagram found 
                    return true;
                }
                if (hash.find(s2[i]) != hash.end()) {
                    // Check if that character is present in the map while sliding the window, then increase 
                    // its frequency by one, as we decreased its frequency when we first met it while crossing the window.

                    hash[s2[i]]++;
                    if (hash[s2[i]] == 1) {
                        count++;
                    }
                }
                i++;
                j++;
            }
        }
        return false;
    }
};
