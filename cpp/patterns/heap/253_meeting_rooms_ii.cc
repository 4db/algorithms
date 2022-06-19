#include <iostream>
#include <functional>
#include <queue>
#include <vector>

class Solution {
public:
    int minMeetingRooms(std::vector<std::vector<int>> &intervals) {
        if (intervals.size() == 0) {
            return 0;
        }

        // Min heap magic.
        std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
        pq.push(intervals[0][1]);

        for (int i = 1; i < intervals.size(); i++) {
            int start = intervals[i][0];
            int end = intervals[i][1];
            if (start >= pq.top()) {
                pq.pop();
            }
            pq.push(end);
        }
        return pq.size();
    }
};

int main() {
    Solution s;
    std::vector<std::vector<int>> intervals = {{0, 30}, {5, 10}, {15, 20}};
    std::cout << s.minMeetingRooms(intervals);

    return 0;
}
