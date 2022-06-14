// Leetcode 199. Binary Tree Right Side View
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
    vector<int> rightSideView(TreeNode* root) {
        std::vector<int> output;
        dfs(root, output, 0);
        return output;
    }
private:
    void dfs(TreeNode* root, std::vector<int>& output, int level) {
        if (!root) {
            return;
        }
        if (output.size() == level) {
            output.push_back(root->val);
        }
        level++;
        dfs(root->right, output, level);
        dfs(root->left, output, level);
    }
};
