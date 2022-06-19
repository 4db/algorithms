
class Solution {
public:
    std::string reorganizeString(std::string s) {
        std::string ans = "";
        std::unordered_map<char, int> mp;
        std::priority_queue<std::pair<int, char>> pq;

        for (auto c : s) {
            mp[c]++;
        }

        for (auto v : mp) {
            const char c = v.first;
            const int frequency = v.second;

            pq.push(std::make_pair(frequency, c));
        }

        // Complete a new string by top 2 char.
        std::pair<int, char> top1;
        std::pair<int, char> top2;
        while (!pq.empty()) {
            top1 = pq.top();
            pq.pop();
            ans += top1.second;
            if (!pq.empty()) {
                ans += pq.top().second;
                top2 = pq.top();
                pq.pop();

                // Add updated characters to priority queue.
                if (top2.first > 1) {
                    pq.push(std::make_pair(top2.first - 1, top2.second));
                }
            }

            // Same here for top 1.
            if (top1.first > 1) {
                pq.push(std::make_pair(top1.first - 1, top1.second));
            }
        }

        // Easy check for valid string
        for (int i = 1; i < ans.size(); i++) {
            if (ans[i -1] == ans[i]) {
                return "";
            }
        }

        return ans;
    }
};
