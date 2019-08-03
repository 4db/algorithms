// https://leetcode.com/problems/serialize-and-deserialize-binary-tree

/**
 * @param {arring|number} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Encodes a tree to a single arring.
 *
 * @param {TreeNode} root
 * @return {arring}
 */
function serialize(root) {
  let queue = [];
  let response = [];
  queue.push(root);
  while(queue.length) {
    const tmpNode = queue.pop();
    if (tmpNode) {
      response.push(tmpNode.val);
      queue.push(tmpNode.right);
      queue.push(tmpNode.left);
      continue;
    }
    response.push(null);
  }
  return response;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {array} arr
 * @return {TreeNode}
 */
function deserialize(arr) {
  if (arr.length === 0) {
    return null;
  }
  return deserializeRec(arr);
};

/**
 * @param {array} arr
 * @return {TreeNode}
 */
function deserializeRec(arr) {
  if (arr.length === 0) {
      return null;
  }
  let rootVal = arr.shift();
  if (rootVal === null) {
      return null;
  }
  let rootNode = new TreeNode(rootVal);
  rootNode.left = deserializeRec(arr);
  rootNode.right = deserializeRec(arr);
  return rootNode;
}

/* TODO add test cases
console.log(deserialize([1,2,3,null,null,4,5]));

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
*/
