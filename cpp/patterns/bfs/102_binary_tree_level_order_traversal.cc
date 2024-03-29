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
    std::vector<std::vector<int>> levelOrder(TreeNode* root) {
        if (!root) {
            return {};
        }
        std::vector<int> row;
        std::vector<vector<int>> result;
        std::queue<TreeNode*> q;
        q.push(root);
        int count = 1;

        while (!q.empty()) {
            if (q.front()->left) {
                q.push(q.front()->left);
            }
            if (q.front()->right) {
                q.push(q.front()->right);
            }
            row.push_back(q.front()->val), q.pop();
            count--;
            if (count == 0) {
                result.emplace_back(row), row.clear();
                count = q.size();
            }
        }
        return result;
    }
};
