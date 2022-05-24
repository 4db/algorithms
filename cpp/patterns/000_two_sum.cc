// This is solition for https://leetcode.com/problems/two-sum, e.x:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
class Solution {
public:
    vector<int> twoSum(vector<int> &numbers, int target) {
        //Key is the number and value is its index in the vector.
        unordered_map<int, int> hash;
        vector<int> result;
        for (int i = 0; i < numbers.size(); i++) {
            int numberToFind = target - numbers[i];

            //if numberToFind is found in map, return them.
            if (hash.find(numberToFind) != hash.end()) {
             return vector<int> {hash[numberToFind], i};
            }

            //number was not found. Put it in the map.
            hash[numbers[i]] = i;
        }
        return vector<int> {};
    }
};
