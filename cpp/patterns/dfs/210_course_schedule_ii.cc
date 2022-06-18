class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        adj.resize(numCourses);
        mark.resize(numCourses);
        cycle = false;
        
        for (auto p : prerequisites) {
            adj[p[1]].push_back(p[0]);
        }
       
        for (int i=0; i < numCourses; i++) {
            if (mark[i] == 0) {
                dfs(i);
            }
        }
        
        if (cycle) {
            return {};
        }
        reverse(order.begin(), order.end());
        return order;
    }
private:
    void dfs(int u) {
        if (mark[u] == 2) {
            return;
        }
        if (mark[u] == 1) {
            cycle=true;
            return;
        }
        
        mark[u] = 1;
        for (int v : adj[u]) {
            dfs(v);
        }
        mark[u] = 2;
        order.push_back(u);
    }

    vector<vector<int>> adj;
    vector<int> order;
    vector<int> mark;
    bool cycle;
};
