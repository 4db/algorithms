// https://leetcode.com/problems/serialize-and-deserialize-binary-tree

/**
 * @param {array|number} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Encodes a tree to a single array.
 *
 * @param {TreeNode} root
 * @return {array}
 */
function serialize(root) {
  const arr = [];
  const serializeRec = function(node) {
    if (node === null) {
      arr.push(null);
    }
    else {
      arr.push(node.val);
      serializeRec(node.left);
      serializeRec(node.right);
    }
  }
  serializeRec(root);
  return arr;
}

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

/*
Test case: You may serialize the following tree:
    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5, null, null, null, null]"
*/
const expectOutput = JSON.stringify([1, 2, 3, null, null, 4, 5, null, null, null, null]);
const outcomeOutput = JSON.stringify(serialize(deserialize([1,2,3,null,null,4,5])));
console.log(
  'It should deserialize and serialize', outcomeOutput === expectOutput ? 'PASS' : 'FAIL');
