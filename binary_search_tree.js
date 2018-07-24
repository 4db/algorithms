class Node {
  constructor(data) {
    this.data  = data;
    this.left  = null;
    this.right = null;
    }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
          this.root = newNode;
          return;
      }
      this.insertNode(this.root, newNode);
      return;
  }

  insertNode(node, newNode) {
      // if the data is less than the node
      // data move left of the tree 
      if (newNode.data < node.data) {
          if (node.left === null) {
              node.left = newNode;
              return;
          }
          this.insertNode(node.left, newNode);
          return;
      }
      if (node.right === null) {
          node.right = newNode;
          return;
      }
      this.insertNode(node.right, newNode);
      return;
  }

  remove(data) {
      this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
      if (node === null || (node.left === null && node.right === null)) {
          return null;
      }
      if (key < node.data) {
          node.left = this.removeNode(node.left, key);
          return node;
      }
      if (key > node.data) {
          node.right = this.removeNode(node.right, key);
          return node;
      }
      if (node.left === null) {
          return node.right;
      }
      if (node.right === null) {
          return node.left;
      }
      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
      
  }

  /*
   * Algorithm for inorder:
   * 1. Traverse inorder on left subtree
   * 2. Visit the root
   * 3. Traverse inorder on right subtree
   *          15
   *         /  \
   *        10   25
   *       / \   / \
   *      7  13 22  27
   *     / \    /
   *    5   9  17
   *
   *  Output: 5, 7, 9, 10, 13, 15, 17, 22, 25, 27
   */
  inorder(node) {
      if (node !== null) {
          this.inorder(node.left);
          console.log(node.data);
          this.inorder(node.right);
      }
  }
  
  /*
   * Algorithm for preoder:
   * 1. Visit the root
   * 2. Traverse preorder on left subtree
   * 3. Traverse preorder on right subtree
   *          15
   *         /  \
   *        10   25
   *       / \   / \
   *      7  13 22  27
   *     / \    /
   *    5   9  17
   *
   *  Output: 15, 10, 7, 5, 9, 13, 25, 22, 17, 27
   */
  preorder(node) {
      if (node !== null) {
          console.log(node.data);
          this.preorder(node.left);
          this.preorder(node.right);
      }
  }

  /*
   * Algorithm for postorder:
   * 1. Traverse postorder on left subtree
   * 2. Traverse postorder on right subtree
   * 3. Visit the root
   *          15
   *         /  \
   *        10   25
   *       / \   / \
   *      7  13 22  27
   *     / \    /
   *    5   9  17
   *
   *  Output: 5, 9, 7, 13, 10, 17, 22, 27, 25, 15
   */
  postorder(node) {
      if (node !== null) {
          this.postorder(node.left);
          this.postorder(node.right);
          console.log(node.data);
      }
  }


  /*
   * Algorithm for levelOrder:
   * 1. Traverse levelOrder on left subtree
   * 2. Traverse levelOrder on right subtree
   * 3. Visit the root
   *          15
   *         /  \
   *        10   25
   *       / \   / \
   *      7  13 22  27
   *     / \    /
   *    5   9  17
   *
   *  Output: 15,10,25,7,13,22,27,5,9,17
   */
  levelOrder(node) {
      const queue = []
      queue.push(node)
      while (queue.length) {
        const temp = queue.shift();
        console.log(temp.data)
        // Enqueue the Queue
        if (temp.left) queue.push(temp.left)
        if (temp.right) queue.push(temp.right)
      }
  }

  getRootNode() {
      return this.root;
  }

  search(node, data) {
      if (node === null) {
          return null;
      }
      if (data < node.data) {
          return this.search(node.left, data);
      }
      if (data > node.data) {
          return this.search(node.right, data);
      }
      return node;
  }

  findMinNode(node) {
    return node.left === null ? node : this.findMinNode(node.left);
  }

  isBalanced(root) {
    if (root == null || (root.right == null && root.left == null)) {
      return true;
    }

    const dL = this.findDeep(root.left);
    const dR = this.findDeep(root.right);

    // An empty tree is height-balanced. A non-empty binary tree T is balanced if:
    // 1) Left subtree of T is balanced
    // 2) Right subtree of T is balanced
    // 3) The difference between heights of left subtree and right subtree is not more than 1.
    const diff = Math.abs(dL-dR) <= 1;
    return diff && this.isBalanced(root.left) && this.isBalanced(root.right);
  };

  findDeep(root){
    if (root == null) {
        return 0;
    }
    const deepL = 1 + this.findDeep(root.left);
    const deepR = 1 + this.findDeep(root.right);

    return deepL > deepR ? deepL : deepR;
  }
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                         
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 
 
var root = BST.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with no children 
BST.remove(5);
             
             
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17 
             
                         
var root = BST.getRootNode();
             
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with one children 
BST.remove(7);
             
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17 
             
             
var root = BST.getRootNode();
 
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with two children 
BST.remove(15);
     
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
 
var root = BST.getRootNode();
console.log("inorder traversal");
 
// prints 9 10 13 17 22 25 27
BST.inorder(root);
             
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
