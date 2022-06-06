// Leetcode 2022. Convert 1D Array Into 2D Array.
class Solution {
public:
    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        if (m * n != original.size()) {
            return {};
        }
        vector<vector<int>> output;
        for(int i = 0; i < m*n; i+=n) {
           output.push_back(vector<int>(original.begin()+i, original.begin()+i+n)); 
        }
        return output;
    }
};
