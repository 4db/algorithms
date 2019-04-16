/**
 * 513. Find Bottom Left Tree Value
 * Given a binary tree, find the leftmost value in the last row of the tree.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
  let queue = [];
  queue.push(root);
  while (queue.length) {
    root = queue.shift();
    if (root.right != null) {
        queue.push(root.right);
    }
    if (root.left != null) {
        queue.push(root.left);
    }
  }
  return root.val;
}
