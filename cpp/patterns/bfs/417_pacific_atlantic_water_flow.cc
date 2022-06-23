class SolutionBFS {
public:
    std::vector<std::vector<int>> pacificAtlantic(std::vector<std::vector<int>>& mat) {
        if(!size(mat)) {
            return ans;
        }
        m = size(mat);
        n = size(mat[0]);
        pacific = std::vector<std::vector<bool>>(m, std::vector<bool>(n, false));
        atlantic = pacific;

        for (int i = 0; i < m; i++) {
            bfs(mat, pacific, i, 0);
            bfs(mat, atlantic, i, n - 1);
        }
        for (int i = 0; i < n; i++) {
            bfs(mat, pacific, 0, i);
            bfs(mat, atlantic, m - 1, i);
        }
        return ans;
    }

private:
    int m, n;
    std::vector<std::vector<int>> ans;
    std::vector<std::vector<bool>> atlantic, pacific;
    queue<std::pair<int, int>> q;

    void bfs(std::vector<std::vector<int>>& mat, std::vector<std::vector<bool>>& visited, int i, int j) {
        q.push({i, j});
        while(!q.empty()) {
            std::tie(i, j) = q.front();
            q.pop();
            if (visited[i][j]) {
                continue;
            }

            visited[i][j] = true;

            if (atlantic[i][j] && pacific[i][j]) {
                ans.push_back(std::vector<int>{i, j});
            }

            /*⬇️*/
            if (i + 1 <  m && mat[i + 1][j] >= mat[i][j]) {
                q.push({i + 1, j});
            }

            /*⬆️*/
            if (i - 1 >= 0 && mat[i - 1][j] >= mat[i][j]) {
                q.push({i - 1, j});
            }

            /*➡️*/
            if (j + 1 <  n && mat[i][j + 1] >= mat[i][j]) {
                q.push({i, j + 1});
            }

            /*⬅️*/
            if (j - 1 >= 0 && mat[i][j - 1] >= mat[i][j]) {
                q.push({i, j - 1});
            }
        }
    }
};
