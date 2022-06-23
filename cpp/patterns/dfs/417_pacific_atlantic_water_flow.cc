
class SolutionDFS {
public:
    std::vector<std::vector<int>>pacificAtlantic(std::vector<std::vector<int>>& mat) {
        if(!size(mat)) {
            return ans;
        }
        m = size(mat), n = size(mat[0]);

        pacific = std::vector<std::vector<bool> >(m, std::vector<bool>(n, false));
        Atlantic = pacific;

        // Perform dfs from all edge cells (ocean-connected cells)
        for (int i = 0; i < m; i++) {
            dfs(mat, pacific, i, 0);
            dfs(mat, Atlantic, i, n - 1);
        }

        for (int i = 0; i < n; i++) {
            dfs(mat, pacific, 0, i);
            dfs(mat, Atlantic, m - 1, i);
        }
        return ans;
    }
private:
    int m, n;
    // Denotes cells reachable starting from Atlantic
    // and pacific edged cells respectively.
    std::vector<std::vector<bool>> Atlantic, pacific;
    std::vector<std::vector<int>> ans;

    void dfs(
        std::vector<std::vector<int> >& mat, std::vector<std::vector<bool> >& visited, int i, int j) {
        if(visited[i][j]) {
            return;
        }
        visited[i][j] = true;
        // If cell reachable from both the oceans, insert into final answer std::vector.
        if (Atlantic[i][j] && pacific[i][j]) {
            ans.push_back(std::vector<int>{i, j});
        }

        // DFS from current cell only if height of next cell is greater

        /*⬇️*/
        if (i + 1 <  m && mat[i + 1][j] >= mat[i][j]) {
            dfs(mat, visited, i + 1, j);
        }

        /*⬆️*/
        if (i - 1 >= 0 && mat[i - 1][j] >= mat[i][j]) {
            dfs(mat, visited, i - 1, j);
        }

        /*➡️*/
        if (j + 1 <  n && mat[i][j + 1] >= mat[i][j]) {
            dfs(mat, visited, i, j + 1); 
        }

        /*⬅️*/
        if (j - 1 >= 0 && mat[i][j - 1] >= mat[i][j]) { 
            dfs(mat, visited, i, j - 1);
        }
    }
};
