// C++ O(n log(n-k)) unordered_map and priority_queue(maxheap) solution.
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        std::unordered_map<int, int> mp;
        
        for (auto n : nums) {
            mp[n]++;
        }

        std::vector<int> ans;
         // First is frequency,  second is number.
        std::priority_queue<std::pair<int, int>> pq;
        
        for (auto v : mp) {
            pq.push(std::make_pair(v.second, v.first));
            if (pq.size() > (int)mp.size() - k) {
                // pq second == map first.
                ans.push_back(pq.top().second);
                pq.pop();
            }
        }
        
        return ans;
    }
};
