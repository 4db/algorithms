// Leetcode 226. Invert Binary Tree.
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
    TreeNode* invertTree(TreeNode* root) {

        if (nullptr == root) {
          return root;
        }

        queue<TreeNode*> myQueue;   // Our queue to do BFS(Breadth-First Search).
        myQueue.push(root);         // Push very first item - root.

        while(!myQueue.empty()){    // Run until there are nodes in the queue.

            TreeNode *node = myQueue.front();  // Get element from queue.
            myQueue.pop();                     // Remove element from queue.

            if(node->left != nullptr){         // Add left value to the queue if it exists.
                myQueue.push(node->left);
            }

            if(node->right != nullptr){        // Add right value. 
                myQueue.push(node->right);
            }

            // Invert left and right pointers, or std::swap(node->left, node-right).
            TreeNode* tmp = node->left;
            node->left = node->right;
            node->right = tmp;

        }

        return root;
    }

    // Recursive solution.
    TreeNode* invertTreeRec(TreeNode* root) {
        if (root) {
            invertTreeRec(root->right);
            invertTreeRec(root->left);
            
            // Invert left and right pointers, or std::swap(node->left, node-right).
            TreeNode* tmp = root->left;
            root->left = root->right;
            root->right = tmp;
        }        
        return root;
    }
};
