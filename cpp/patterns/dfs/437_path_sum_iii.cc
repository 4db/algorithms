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
    int ans=0;
    int pathSum(TreeNode* root, int targetSum) {
        if(root){
            dfs(root,targetSum);
            pathSum(root->left,targetSum);
            pathSum(root->right,targetSum);
        }
        return ans;
    }
    // if use int sum -> runtime error: signed integer overflow: -1999999000 - 1000000000 cannot be represented in type 'int'.
    void dfs(TreeNode* root, long sum){
        if(!root)return;
        if(root->val==sum)ans++;
        dfs(root->left,sum-root->val);
        dfs(root->right,sum-root->val);
    }
};
