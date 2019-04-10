/**
 * 965. Univalued Binary Tree
 * A binary tree is univalued if every node in the tree has the same value.
 * Return true if and only if the given tree is univalued.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * Depth First Search:
 *  Time complexity recursive implementation O(n)
 *  Space complexity recursive implementation O(n)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnivalTreeDFS(root, val = root.val) {
  if (!root) {
    return true;
  }
  return root.val === val && isUnivalTreeDFS(root.left, val) &&
    isUnivalTreeDFS(root.right, val);
};

/**
 * Iterative version - Breadth First Search:
 *   Time complexity recursive implementation O(n)
 *   Space complexity recursive implementation O(n)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnivalTreeBFS(root) {
  const queue = [];
  queue.push(root);
  while(queue.length) {
    const nodeEl = queue.shift();
    if (nodeEl.val !== root.val) {
      return false;
    }
    if (nodeEl.right !== null) {
      queue.push(nodeEl.right);
    }
    if (nodeEl.left !== null) {
      queue.push(nodeEl.left);
    }
  }
  return true;
}
