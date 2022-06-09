// Leetcode 435. Non-overlapping Intervals.
// Key concept : pick interval with smallest end, because smallest end can hold most intervals. keep track of current element end. if next start is more than global end, remove that next element

// 1. Sort by ending.
// 2. Keep track of previous end.
// 3. if the next start > previous end, remove element.
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if (intervals.size() <= 1) {
            return 0;
        }

        sort(intervals.begin(), intervals.end(), [](const auto& l, const auto& r) { 
            return l[1] < r[1]; 
        });

        int prevIndex = 0;
        int eraseCount = 0;

        for (int i = 1; i < intervals.size(); ++i) {
            if (intervals[prevIndex][1] > intervals[i][0]) {
                eraseCount++;
            }
            else {
                prevIndex = i;
            }
        }

        return eraseCount;
    }
};
