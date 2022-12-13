// Leetcode 79 https://leetcode.com/problems/word-search/
// Time: O(4n) => O(n).
// Space: O(1).
class Solution {
public:
   bool exist(std::vector<std::vector<char>> &board, std::string word) {
       int row = board.size(), col = board[0].size();
       for (int i = 0 ; i < row ; ++i) {
           for (int j = 0 ; j < col ; ++j) {
               if (search(0 , i , j , board , word)) {
                   return true;
               }
           }
       }
       return false;
   }

   bool search(int index , int x , int y , std::vector<std::vector<char>> &board , std::string &word)
   {
       if (index == word.size()) {
           return true;
       }

       if (x < 0 || y < 0 || x >= board.size() || y >= board[0].size() || board[x][y] == '-') {
           return false;
       }

       if (board[x][y] != word[index]) {
           return false;
       }

       char temp = board[x][y];
       board[x][y] = '-'; 

       if (search(index + 1 , x - 1 , y , board , word) || search(index + 1 , x + 1 , y , board , word) || search(index + 1 , x , y - 1 , board , word) || search(index + 1 , x , y + 1 , board , word)) {
           return true;
       }

       board[x][y] = temp;
       return false;
   }
};

// DFS.
// Time: O(N+M) => (O(E+V)).
// Space: O(1).
class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size(), n = board[0].size();
        int index = 0;
        
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if (board[i][j] == word[index]) {
                    if (search(i, j, index, board, word)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
    
    bool search(int i, int j, int index, vector<vector<char>>& board, string& word) {
        int m = board.size(), n = board[0].size();
        
        if (index == word.size()) {
            return true;
        }
        if (i < 0 or j < 0 or i >= m or j >= n) {
            return false;
        }

        bool result = false;
        if (word[index] == board[i][j]) {
            char temp = word[index];
            board[i][j] = '#';
            result = search(i+1, j, index+1, board, word) || search(i-1, j, index+1, board, word) || 
                search(i, j+1, index+1, board, word) || search(i, j-1, index+1, board, word);
            
            board[i][j] = temp;
        }
        
        return result;
    }
    
};
