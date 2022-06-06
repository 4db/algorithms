// Leetcode 637. Average of Levels in Binary Tree
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
    vector<double> averageOfLevels(TreeNode* root) {
        vector<double> output;
        queue<TreeNode*> q;
        q.push(root);
        while(!q.empty()) {
            long temp = 0;
            int s = q.size();
            
            for (int i = 0; i < s; i++) {
                TreeNode* t_node = q.front();
                q.pop();
                if (t_node->left) {
                    q.push(t_node->left);
                }
                if (t_node->right) {
                    q.push(t_node->right);
                }
                temp += t_node->val;
            }
            output.push_back((double)temp / s);
        }
        return output;
    }
};
