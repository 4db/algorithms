class Solution {
public:
    // Time Complexity: O(x*y + x*y) => O(xy).
    // Space Complexity: O(1).
    int numIslands(std::vector<std::vector<char>>& grid) {
        x_size = grid.size();
        y_size = x_size ? grid[0].size() : 0;
        int islands = 0;

        for (int x = 0; x < x_size; x++) {
            for (int y = 0; y < y_size; y++) {
                if (grid[x][y] == '1') {
                    islands++;
                    bfs(grid, x, y);
                }
            }
        }
        return islands;
    }
private:
    int y_size;
    int x_size;
    std::queue<std::pair<int, int>> q;

    void bfs(std::vector<std::vector<char>>& grid, int x, int y) {
        q.push({x, y});
        grid[x][y] ='0';

        while (!q.empty()){
            int x = q.front().first;
            int y = q.front().second;
            q.pop();

            // ⬇️ move down.
            if (x+1 < x_size && grid[x+1][y] == '1') {
                grid[x+1][y] = '0';
                q.push({x+1, y});
            }
            
            // ⬆️ move up.
            if (x-1 >= 0 && grid[x-1][y] == '1') {
                grid[x-1][y] = '0';
                q.push({x-1, y});
            }

            // ⬅️ move left.
            if (y-1 >= 0 && grid[x][y-1] == '1') {
                grid[x][y-1] = '0';
                q.push({x, y-1});
            }

            // ➡️ move right.
            if (y+1 < y_size && grid[x][y+1] == '1') {
                grid[x][y+1] = '0';
                q.push({x, y+1});
            }
        }
    }
};

class SolutionVisitedBFS {
public:
    // Time Complexity: O(x*y + x*y) => O(xy).
    // Space Complexity: O(xy) if original grid is not editable.
    int numIslands(std::vector<std::vector<char>>& grid) {
        x_size = grid.size();
        y_size = x_size ? grid[0].size() : 0;
        int islands = 0;
        visited = std::vector<std::vector<bool>>(x_size, std::vector<bool>(y_size, false));

        for (int x = 0; x < x_size; x++) {
            for (int y = 0; y < y_size; y++) {
                if (grid[x][y] == '1' && !visited[x][y]) {
                    islands++;
                    bfs(grid, x, y);
                }
            }
        }
        return islands;
    }
private:
    int y_size;
    int x_size;
    std::queue<std::pair<int, int>> q;
    std::vector<std::vector<bool>> visited;

    void bfs(std::vector<std::vector<char>>& grid, int x, int y) {
        q.push({x, y});
        visited[x][y] = true;

        while (!q.empty()){
            int x = q.front().first;
            int y = q.front().second;
            q.pop();

            // ⬇️ move down.
            if (x+1 < x_size && grid[x+1][y] == '1' && !visited[x+1][y]) {
                visited[x+1][y] = true;
                q.push({x+1, y});
            }
            
            // ⬆️ move up.
            if (x-1 >= 0 && grid[x-1][y] == '1' &&!visited[x-1][y]) {
                visited[x-1][y] = true;
                q.push({x-1, y});
            }

            // ⬅️ move left.
            if (y-1 >= 0 && grid[x][y-1] == '1' &&!visited[x][y-1]) {
                visited[x][y-1] = true;
                q.push({x, y-1});
            }

            // ➡️ move right.
            if (y+1 < y_size && grid[x][y+1] == '1' && !visited[x][y+1]) {
                visited[x][y+1] = true;
                q.push({x, y+1});
            }
        }
    }
};
