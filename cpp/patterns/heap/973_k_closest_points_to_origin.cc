/*
Use a min heap. A min heap has the smallest element in the root.
Add all the points to the heap, and then pop the first K ones, we are
just the closest ones. This makes the code shorter.
Now this one is of O(n + Klogn) time.
The n part is on adding all points to the heap(building a min heap for all the points) and the Klogn part is on fetching
the top K points from the heap.
*/
class Solution {
public:
    std::vector<std::vector<int>> kClosest(std::vector<std::vector<int>>& points, int K) {
        std::priority_queue<std::vector<int>, std::vector<std::vector<int>>, compare> pq(points.begin(), points.end());
        std::vector<std::vector<int>> ans;
        for (int i = 0; i < K; i++) {
            ans.push_back(pq.top());
            pq.pop();
        }
        return ans;
    }
private:
    struct compare {
        bool operator()(std::vector<int>& p, std::vector<int>& q) {
            return (p[0] * p[0] + p[1] * p[1])
                > (q[0] * q[0] + q[1] * q[1]);
        }
    };
};
