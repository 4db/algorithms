// Leetcode 79 https://leetcode.com/problems/word-search/
// Time: O(4 * (|E| + |V|) => O(|E| + |V|).
// Space: O(1).
class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if (dfs(board, i, j, 0, word)) {
                    return true;
                }
            }
        }

        return false;
    }

    bool dfs(vector<vector<char>>& board, int i, int j, int index, string word) {
        if (index == word.size()) {
           return true;
       }
        if (i < 0 || j < 0
           || i >= board.size() || j >= board[0].size()
           || board[i][j] != word[index]
           ) {
           return false;
        }

        board[i][j] = '#';
        int new_index = index + 1;
        if (
            dfs(board, i-1, j, new_index, word) || // up
            dfs(board, i+1, j, new_index, word) || //down
            dfs(board, i, j-1, new_index, word) || // left
            dfs(board, i, j+1, new_index, word) // right
        ) {
            return true;
        }
        board[i][j] = word[index];

        return false;
    }
};
