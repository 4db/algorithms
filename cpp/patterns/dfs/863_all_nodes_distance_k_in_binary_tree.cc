/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        if (!root) {
            return {};
        }
        findParent(root);
        dfs(target, k);
        return ans;
    }
private:
    std::vector<int> ans;   
    std::unordered_map<int, TreeNode*> parent; // son(n->val) => parent.  
    // Record visited node, store just int val(unique).
    std::unordered_set<int> visit;

    void findParent(TreeNode* node){
        if (!node) {
            return;
        }
        if (node->left) {
            parent[node->left->val] = node;
            findParent(node->left);
        }
        if (node->right) {
            parent[node->right->val] = node;
            findParent(node->right);
        }
    }
    
    void dfs(TreeNode* node, int K) {
        if (!node || visit.find(node->val) != visit.end()) {
            return;
        }
        visit.insert(node->val);
        if (K == 0) {
            ans.push_back(node->val);
            return;
        }
        dfs(node->left, K - 1);
        dfs(node->right, K - 1);
        dfs(parent[node->val], K - 1);
    }
};
