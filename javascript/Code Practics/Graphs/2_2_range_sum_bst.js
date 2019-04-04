/**
 * 938. Range Sum of BST
 * Given the root node of a binary search tree, 
 * return the sum of values of all nodes with value between L and R (inclusive).
 * The binary search tree is guaranteed to have unique values.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(root, L, R) {
    if (!root) {
        return null;
    }
    const result = [];
    const iterate = node => {
        if (!node) {
            return;
        }
        
        if (node.val >= L && node.val <= R) {
            result.push(node.val);
        }
        
        iterate(node.left);
        iterate(node.right);
    }
    iterate(root);
    return result.reduce((a,b) => a + b);
};
