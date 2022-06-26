class Solution {
public:
    std::vector<std::vector<int>> pacificAtlantic(std::vector<std::vector<int>>& grid) {
        if(grid.empty()) {
            return ans;
        }
        rows_size = size(grid);
        column_size = size(grid[0]);
        pacific_grid = std::vector<std::vector<bool>>(rows_size, std::vector<bool>(column_size, false));
        atlantic_grid = pacific_grid;

        // For loop all rows, for pacific bfs left cells, for atlantic bfs right cells, e.x:
        // P,*, A
        // P,*, A
        // P,*, A
        for (int i = 0; i < rows_size; i++) {
            bfs(grid, pacific_grid, i, 0);
            bfs(grid, atlantic_grid, i, column_size - 1);
        }

        // For loop all columns, for pacific bfs top cells, for atlantic bfs bottom:
        for (int i = 0; i < column_size; i++) {
            bfs(grid, pacific_grid, 0, i);
            bfs(grid, atlantic_grid, rows_size - 1, i);
        }
        return ans;
    }

private:
    int rows_size;
    int column_size;
    std::vector<std::vector<int>> ans;
    std::vector<std::vector<bool>> atlantic_grid, pacific_grid;
    queue<std::pair<int, int>> q;

    void bfs(std::vector<std::vector<int>>& grid, std::vector<std::vector<bool>>& visited, int x, int y) {
        q.push({x, y});
        while(!q.empty()) {
            std::tie(x, y) = q.front();
            std::cout << "x: " << x << "y: " << y << std::endl;
            q.pop();
            if (visited[x][y]) {
                continue;
            }

            visited[x][y] = true;

            if (atlantic_grid[x][y] && pacific_grid[x][y]) {
                ans.push_back(std::vector<int>{x, y});
            }

            /*⬇️*/
            if (x + 1 <  rows_size && grid[x + 1][y] >= grid[x][y]) {
                q.push({x + 1, y});
            }

            /*⬆️*/
            if (x - 1 >= 0 && grid[x - 1][y] >= grid[x][y]) {
                q.push({x - 1, y});
            }

            /*➡️*/
            if (y + 1 <  column_size && grid[x][y + 1] >= grid[x][y]) {
                q.push({x, y + 1});
            }

            /*⬅️*/
            if (y - 1 >= 0 && grid[x][y - 1] >= grid[x][y]) {
                q.push({x, y - 1});
            }
        }
    }
};
