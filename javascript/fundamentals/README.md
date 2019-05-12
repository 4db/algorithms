### I Array Sorting(5/5)

- #### Sorting/Quicksort/MergeSort
Describe worst time and space complexity.

- #### Counting Sort/ Selection Sort
Describe worst time and space complexity

- #### heapSort
Implement heap sort algorithm.

- #### mergeSort
Implement merge sort algorithm.

- #### quickSort
Implement quick sort algorithm.

### II Dynamic programming/Greedy Algo/Math(15/3)

- #### 509. Fibonacci Number
Implement function getFibonacciNumber(N). Describe time and space complexity.

- ####  153. Find Minimum|Maximum in Rotated Sorted Array.
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

- #### 69. Sqrt(x) 
Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

### III Stack/Queue(4/4)

- #### Implement two stacks in one array
A [1 . . n] in such a way that neither stack overflows unless
the total number of elements in both stacks together is n. The PUSH and POP operations should runin O(1) time.

- #### Stack insertion and deletion
Whereas a stack allows insertion and deletion of elements at only one end and a queue allows insertion at one end and deletion at the other end, a deque (double-ended queue) allows insertion and deletion at both ends. Write four O(1)-time procedures to insert elements into and delete elements from both ends of a deque constructed from an array.

- #### Implement a queue using two stacks.
Analyze the running time of the queue operations.

- #### Show how to implement a stack using two queues.
Analyze the running time of the stack operations.

### IV LinkedList(7/7)

- #### Merge two sorted linked lists
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

<details>
 <summary>Test case</summary>

```js
const TEST_LINKED_LIST_1 = new Node(null, -1);
[1,2,3,4,5].reverse().map(el => TEST_LINKED_LIST_1.next = new Node(TEST_LINKED_LIST_1.next, el));

const TEST_LINKED_LIST_2 = new Node(null, -1);
[6,7,8,9,10].reverse().map(el => TEST_LINKED_LIST_2.next = new Node(TEST_LINKED_LIST_2.next, el));

console.log('It should return merged linked list', conmergeTwoLists(TEST_LINKED_LIST_1, TEST_LINKED_LIST_2));
```
</details>

<details>
 <summary>Answer</summary>

```js
const mergeTwoLists = (l1, l2) => {
  let mergedLinkedListHead = {val: -1, next: null};
  let runner = mergedLinkedListHead;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      runner.next = l2;
      l2 = l2.next;
    }
    else {
      runner.next = l1;
      l1 = l1.next;
    }
    runner = runner.next;
  }
  // For case if l1 already empty, but l2 is not
  runner.next = l1 || l2;
  return mergedLinkedListHead.next;
}

class Node() {
  constructor(nextNode, value) {
    this.next = nextNode;
    this.value = value;
  }
}
```

</details>
- #### 1_1_Swap_nodes_in_pairs.js
- #### 1_2_Odd_Even_LinkedList.js
- #### 1_3_middle_of_linked_list.js
- #### 1_4_Find_N_node_from_end.js
- #### 1_5_palindrome_linked_list.js
- #### 1_6_remove_dublicates_from_sorted_list.js

### V Graph/DFS/BFS(6/6)

- #### Representations of graphs
Given an adjacency-list representation of a directed graph, how long does it take to compute the out-degree of every vertex? How long does it take to compute the in-degrees?
- #### Give an adjacency-list representation for a complete binary tree on 7 vertices.
Give an equivalent adjacency-matrix representation. Assume that vertices are numbered from 1 to 7 as in a binary heap.
- #### DFS recursion
Implement DFS. Describe time and space complexity and difference between BFS.
- #### BFS recursion
Implement BFS. Describe time and space complexity and difference between DFS.
- #### DFS iteration
Implement DFS. Describe time and space complexity and difference between BFS.
- #### BFS iteration
Implement BFS. Describe time and space complexity and difference between DFS.

### VI Tree traversal(20/1)
- #### convert_tree_to_arr.js
### VII Binary Search(20/0)
- #### Draw binary search trees.
Draw binary search trees of height 2, 3, 4, 5, and 6 on the set of keys {1, 4, 5, 10, 16, 17, 21}.
<details>
 <summary>Answer height 2</summary>

```js
/* height 2
 *
 *        10 
 *       /   \
 *      4     17
 *     / \   /  \
 *    1   5  16  21
 */
```

</details>


<details>
 <summary>Answer height 3</summary>

```js
/* height 3
 *
 *        10 
 *       /   \
 *      5     17
 *     /     /  \
 *    4     16  21
 *   /
 *  1
 */
```

</details>

<details>
 <summary>Answer height 4</summary>

```js
/* height 4
 *
 *        10 
 *       /   \
 *      5     17
 *     /     /  \
 *    4     16  21
 *   /
 *  1
 */
```

</details>

<details>
 <summary>Answer height 5</summary>

```js
/* height 5
 *
 *              21
 *             /  \
 *            16   17
 *           /
 *          10
 *         /
 *        5
 *       /
 *      4
 *     /
 *    1
 */
```

</details>

<details>
 <summary>Answer height 6</summary>

```js
/* height 6
 *
 *                17
 *               /
 *              21
 *             /
 *            16
 *           /
 *          10
 *         /
 *        5
 *       /
 *      4
 *     /
 *    1
 */
```

</details>
  
### VII Heap(5/0)
- #### 1_1_find_min_max_in_rotated_arr.js
