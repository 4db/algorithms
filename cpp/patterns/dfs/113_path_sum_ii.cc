/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        vector<vector<int>> ans;
        vector<int> curr;
        dfs(root, sum, curr, ans);
        return ans;
    }
private:
    void dfs(TreeNode* root, int sum, vector<int>& curr, vector<vector<int>>& ans) {
        if (!root) {
          return;
        }
        curr.push_back(root->val);
        if (sum == root->val && !root->left && !root->right) {
            ans.push_back(curr);
        }
        dfs(root->left, sum - root->val, curr, ans);
        dfs(root->right, sum - root->val, curr, ans);
        curr.pop_back();
    }
};
