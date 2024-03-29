// Leetcode 57. Insert Interval.
class Solution {
public:
    std::vector<std::vector<int>> insert(std::vector<std::vector<int>>& intervals, std::vector<int>& newInterval) {
        std::vector<std::vector<int>> res;
        size_t i = 0;
        
        // Left part (no intersection with newInterval)
        while (i < intervals.size() && intervals[i][1] < newInterval[0]) {
            res.push_back(intervals[i]);
            ++i;
        }
        
        // newInterval part (with or without merge)
        while (i < intervals.size() && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = min(newInterval[0], intervals[i][0]);
            newInterval[1] = max(newInterval[1], intervals[i][1]);
            ++i;
        }
        res.push_back(newInterval);
        
        // Right part (no intersection with newInterval)
        while (i < intervals.size() && intervals[i][0] > newInterval[1]) {
            res.push_back(intervals[i]);
            ++i;
        }
        return res;
    }
};
