// Leetcode 56. Merge Intervals.
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Time: O(nlogn) -> sorting.
// Space: O(n) -> output.
class Solution {
public:
    std::vector<std::vector<int>> merge(std::vector<std::vector<int>>& intervals) {
        if (intervals.empty()) {
            return intervals;
        }
        std::sort(intervals.begin(), intervals.end());
        std::vector<std::vector<int>> output;
        output.push_back(intervals[0]);
        
        for (int i = 1; i < intervals.size(); i++) {
            if (output.back()[1] >= intervals[i][0]) {
                 output.back()[1] = max(output.back()[1] , intervals[i][1]);
            }
            else {
                output.push_back(intervals[i]);
            }
        }
        return output;
    }
};

// Time: O(n) -> O(n + n).
// Space: O(n) -> output and map.
class Solution {
public:
    std::vector<std::vector<int>> merge(std::vector<std::vector<int>>& intervals) {
        std::map<int, int> mp;
        std::vector<std::vector<int>> res;
        for (auto interval: intervals){
             mp[interval[0]]++;
             mp[interval[1]]--;
        }

        int count = 0;
        int start;
        for (auto const& [interval, cnt] : mp) {
             if (count == 0) {
                 start = interval;
             } 
             count += cnt;
             // If count is 0 => interval completed => no overlap.
             if (count == 0) {
                 res.push_back(std::vector{start, interval});
             }
         }
        return res;
    }
};
