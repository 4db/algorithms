### General

Write Big-O functions with analyzing algorithms from O(1) to O(n!) with name and example:

<details>
 <summary>Hint</summary>

```
O(1)
O(log(n))
O( log(n) ^ c )
O(n)
O(nlogn)
O(n^2)
O(n^c)
O(c^n)
O(n!)
```
</details>

<details>
 <summary>Answer</summary>
 
 https://en.wikipedia.org/wiki/Big_O_notation
 
``` 
O(1) - constant time, example: Calcoperation; Determining if a binary number is even or odd;
O(log(n)) - logarithmic time, example: finding an item in a sorted array with a binary search;
O( log(n) ^ c ) - polylogarithmic time, example: Matrix chain ordering can be solved in polylogarithmic time on a parallel random-access machine;
O(n) - linear time, example: 	Finding an item in an unsorted list or in an unsorted array;
O(nlogn) - linearithmic, example: Heapsort, Mergesort;
O(n^2) - quadratic time, example: worst case Quick Sort;
O(n^c) - polynomial time, example: Tree-adjoining grammar parsing; maximum matching for bipartite graphs;
O(c^n) - exponential time, example: Finding the (exact) solution to the travelling salesman problem using dynamic programming, or simple Fibonacci sequence;
O(n!) - factorial time: Solving the travelling salesman problem via brute-force search;
```

</details>

### I Array Sorting(5/5)

- #### Quicksort / MergeSort
Describe worst time and space complexity.

<details>
 <summary>Answer</summary>

```
Quicksort O(n^2) / Space - O(logn)
Mergesort O(nlogn) / Space - O(n)
```
</details>

- #### Counting Sort / HeapSort
Describe worst time and space complexity

<details>
 <summary>Answer</summary>

```
Counting O(n+k) / Space - O(k)
HeapSort O(nlogn) / Space - O(1)
```
</details>

- #### heapSort
Implement heap sort algorithm.
<details>
 <summary>Answer</summary>

```js
function heapSort(arr) {
  const heapRoot = (i) => {
    const le = 2 * i + 1;
    const ri = 2 * i + 2;
    let max = (le < size && arr[le] > arr[i]) ? le : i;
    max = (ri < size && arr[ri] > arr[max]) ? ri : max;

    if (max != i) {
      swap(arr, i, max);
      heapRoot(max);
    }
  }

  let size = arr.length;
  for (let i = Math.floor(size / 2); i >= 0; i -= 1) {
    heapRoot(i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i); //Array swap by keyA & keyB
    size--;
    heapRoot(0);
  }
  return arr;
}
```

</details>

- #### mergeSort
Implement merge sort algorithm.

<details>
 <summary>Answer</summary>

```js
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = parseInt(arr.length / 2),
  le = arr.slice(0, mid),
  ri = arr.slice(mid, arr.length);
  return recurstionMerge(mergeSort(le), mergeSort(ri));
}

const recurstionMerge = (le, ri) => {
  const res = [];

  while(le.length && ri.length) {
    res.push(le[0] < ri[0] ? le.shift() : ri.shift());
  }

  while(le.length) {
    res.push(le.shift());
  }

  while(ri.length) {
    res.push(ri.shift());
  }
  return res;
}

```
</details>

- #### quickSort
Implement quick sort algorithm.

### II Dynamic programming/Greedy Algo/Math(15/2)

- #### 509. Fibonacci Number
Implement function getFibonacciNumber(N). Describe time and space complexity.

- ####  153. Find Minimum|Maximum in Rotated Sorted Array.
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

### III Stack/Queue(5/5)

- #### Write isValid function
Given a string containing just the characters '(', ')', '[' and ']', determine if the input string is valid.

<details>
 <summary>Test cases</summary>

```js
console.log('It should return true', isValid('[()]()') === true ? 'PASS' : 'FAIL');
console.log('It should return true', isValid('[([[()]])]()') === true ? 'PASS' : 'FAIL');
console.log('It should return true', isValid('[([[())]])]()') === false ? 'PASS' : 'FAIL');
console.log('It should return true', isValid('[([[()]])]()]') === false ? 'PASS' : 'FAIL');
```

</details>

<details>
 <summary>Answer</summary>
 
```js
function isValid(str) {
  const options = {'(' : ')', '[' : ']'};
  const stack = [];
  for (c of str) {
    if (options[c]) {
      stack.push(options[c]);
    }
    else if (stack.length === 0 || stack.pop() !== c) {
      return false;
    }
  }
  return stack.length === 0;
}
```

</details>

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
- #### Binary tree search operation.

What time complexity for complete binary tree? <br/>
What time complexity for liner chain of nodes? <br/>
What time complexit for randomly build binary tree? <br/>

<details>
 <summary>Answer</summary>
 
  - complete binary tree O (lg n)
  - liner chain of nodes O (n)
  - randomly build binary tree O (lg n)
</details>

- #### What time complexity to Inorder / Preorder / Postorder binary search tree walk:
<details>
 <summary>Answer</summary> 
 O (n)
</details>

- #### What time complexity for construction a binary tree from list of n elements?
<details>
 <summary>Answer</summary> 
 For constructing a binary tree from the list of n elements takes O(n log n) time for worst case
</details>

- #### What time complexity for search operation in binary tree? Find min / Find max ?
<details>
 <summary>Answer</summary> 
 Search operation O(h), where h is height of the tree <br/>
 Find min / Find max - O(h)
</details>   
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
