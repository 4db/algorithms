// Leetcode 986. Interval List Intersections.
class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& firstList, vector<vector<int>>& secondList) {
        vector<vector<int>> output;
        int i=0, j=0;
        while (i < firstList.size() && j < secondList.size()) {
            int prev = std::max(firstList[i][0], secondList[j][0]);
            int cur = std::min(firstList[i][1], secondList[j][1]);

            if (prev <= cur) {
                output.push_back({prev, cur});
            }
            if (firstList[i][1] < secondList[j][1]) {
                i++;
            }
            else {
                j++;
            }
        }
        return output;
    }
};
