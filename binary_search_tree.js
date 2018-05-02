function Node(data) {
    var vm   = this;
    vm.data  = data;
    vm.left  = null;
    vm.right = null;
};

function BinarySearchTree() {
    var vm  = this;
    vm.root = null;
    
    vm.insert = function(data) {
        var newNode = new Node(data);
        if (vm.root === null) {
            vm.root = newNode;
            return;
        }
        vm.insertNode(vm.root, newNode);
        return;
    };

    vm.insertNode = function(node, newNode) {
        // if the data is less than the node
        // data move left of the tree 
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
                return;
            }
            vm.insertNode(node.left, newNode);
            return;
        }
        if (node.right === null) {
            node.right = newNode;
            return;
        }
        vm.insertNode(node.right, newNode);
        return;
    };

    vm.remove = function(data) {
        vm.root = vm.removeNode(vm.root, data);
    };

    vm.removeNode = function(node, key) {
        if (node === null || (node.left === null && node.right === null)) {
            return null;
        }
        if (key < node.data) {
            node.left = vm.removeNode(node.left, key);
            return node;
        }
        if (key > node.data) {
            node.right = vm.removeNode(node.right, key);
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
        var aux = vm.findMinNode(node.right);
        node.data = aux.data;
        node.right = vm.removeNode(node.right, aux.data);
        return node;
        
    };

    /*
     * inorder(node) – It performs inorder traversal of a tree starting from a given node
     * Algorithm for inorder:
     * 1. Traverse the left subtree i.e perform inorder on left subtree
     * 2. Visit the root
     * 3. Traverse the right subtree i.e perform inorder on right subtree
     */
    vm.inorder = function(node) {
        if (node !== null) {
            vm.inorder(node.left);
            console.log(node.data);
            vm.inorder(node.right);
        }
    };
    
    /*
     * preorder(node) – It performs preorder traversal of a tree starting from a given node.
     * Algorithm for preoder:
     * 1. Visit the root
     * 2. Traverse the left subtree i.e perform inorder on left subtree
     * 3. Traverse the right subtree i.e perform inorder on right subtree
     */
    vm.preorder = function(node) {
        if (node !== null) {
            console.log(node.data);
            vm.preorder(node.left);
            vm.preorder(node.right);
        }
    };

    /*
     * postorder(node) – It performs postorder traversal of a tree starting from a given node.
     * Algorithm for postorder:
     * 1. Traverse the left subtree i.e perform inorder on left subtree
     * 2. Traverse the right subtree i.e perform inorder on right subtree
     * 3. Visit the root
     */
    vm.postorder = function(node) {
        if (node !== null) {
            vm.postorder(node.left);
            vm.postorder(node.right);
            console.log(node.data);
        }
    };

    vm.getRootNode = function() {
        return vm.root;
    };
    vm.search = function(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            return vm.search(node.left, data);
        }
        if (data > node.data) {
            return vm.search(node.right, data);
        }
        return node;
    };
    vm.findMinNode = function(node) {
        return node.left === null ? node : vm.findMinNode(node.left);
    };
};

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