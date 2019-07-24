# Big-O in JavaScript
*A mostly Javascript code examples implementation, space, and time Big-O complexities of common algorithms used in Computer Science.*

> **Note**: this guide assumes you are using JavaScript, and requires that you need code examples of worst case Time and Space complexity of algorithms. I've interviewed at several Silicon Valley companies, and created cheat sheet for main algorithms topics with Javascript code.

### Table of Contents

  1. [BigO Analyzing](#bigo-analyzing)
  1. [Array Sorting](#array-sorting)
  1. [Greedy Algo](#greedy-algo)
  1. [Dynamic programming](#dynamic-programming)
  1. [Stacks and Queues](#stacks-and-queues)
  1. [LinkedList](#linkedlist)
  1. [Graph, DFS and BFS](#graph-dfs-and-bfs)
  1. [Tree traversal](#tree-traversal)
  1. [Binary Search](#binary-search)
  1. [Heap](#heap)

### BigO Analyzing

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

### Array Sorting

- #### Quicksort / MergeSort / Counting Sort / HeapSort
Describe worst time, space complexity and <b>stablility</b>.

<b>Stable</b> sorting algorithms maintain the relative order of records with equal keys (i.e. values). That is, a sorting algorithm is stable if whenever there are two records R and S with the same key and with R appearing before S in the original list, R will appear before S in the sorted list.

<details>
 <summary>Answer</summary>

```
Quicksort O(n^2) / Space - O(logn) / Typical in-place sort is not stable; stable versions exist.
Mergesort O(nlogn) / Space - O(n) / Stable
Counting O(n+k) / Space - O(k) / Stable
HeapSort O(nlogn) / Space - O(1) / not stable
```
</details>

- #### Merge Sort
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

  while (le.length && ri.length) {
    res.push(le[0] < ri[0] ? le.shift() : ri.shift());
  }

  while (le.length) {
    res.push(le.shift());
  }

  while (ri.length) {
    res.push(ri.shift());
  }
  return res;
}

```
</details>

- #### Quick Sort
Implement quick sort algorithm.


<details>
 <summary>Answer</summary>

```js
function quickSort(arr, le, ri) {
  if (arr.length <= 1) {
    return arr;
  }
  le = !le ? 0 : le;
  ri = !ri ? arr.length - 1 : ri;
  let i = getPivot(arr, le, ri);

  if (le < i - 1) {
    quickSort(arr, le, i - 1);
  }

  if (i < ri) {
    quickSort(arr, i, ri);
  }
  return arr;
}

function getPivot(arr, le, ri) {
  let pivot = arr[Math.floor((le + ri) / 2)];

  while (le <= ri) {
    while (arr[le] < pivot) {
      le++;
    }

    while (arr[ri] > pivot) {
      ri--;
    }

    if (le <= ri) {
      swap(arr, le, ri); //helper function
      le++;
      ri--;
    }
  }
  return le;
}
```

</details>

- #### Counting Sort
Implement counting sort algorithm.

<details>
 <summary>Answer</summary>

```js
/*
 * O(n+k) - Time Complexity
 * O(n+k) - Space complexity (for count var storage)
 */
function countingSort(arr, min, max) {
  const count = [];

  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  let j = 0;
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      count[i]--;
      arr[j++] = i;
    }
  }
 return arr;
}

/*
 * O(n+2k) - Time Complexity
 * O(n+k) - Space complexity (for count var storage)
 */
function sortByDistinctCollection(arr, disc) {
  // find min and max in distinct
  let min = disc[0];
  let max = disc[0];

  // If disc not sorted
  disc.map(val => {
    if (val < min) {
      min = val;
    }
    if (val > max) {
      max = val;
    }
  });
  return countingSort(arr, min, max);
}

```
</details>

### Greedy Algo
Implement Greedy Algorithm for maximum daily profit from stock sale. Example stocks input [18, 17, 13, 11, 5, 1].


<details>
 <summary>Answer</summary>

```js
function getMaxProfitFromStockPrices(pricesArr) {
  let minPrice = pricesArr[0];
  let maxProfit = pricesArr[1] - pricesArr[0];
  let minIndex = 0
  for (let i = 1; i < pricesArr.length; i++) {
    if ((pricesArr[i] - minPrice) > maxProfit) {
      maxProfit = pricesArr[i] - minPrice;
      minPrice = pricesArr[i];
    }
  }
  return maxProfit;
}
```

</details>

### Dynamic programming

- #### 509. Fibonacci Number
Implement function getFibonacciNumber(N). Describe time and space complexity.

<details>
 <summary>Answer</summary>

```js

const memo = {};

function getFibonacciNumberRecursive(N) {
  if (N <= 2) {
    return N < 1 ? 0 : 1;
  }
  if (!memo[N]) {
    memo[N] = getFibonacciNumberRecursive(N - 1) + getFibonacciNumberRecursive(N - 2);
  }
  return memo[N];
}

// or 

function getFibonacciNumberTailRecursion (n, a = 0, b = 1){
  if (n > 0) {
    return getFibonacciNumberTailRecursion(n - 1, b, a + b);
  }
  return a;
}
```

</details>

### Stacks and Queues

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
the total number of elements in both stacks together is n. The PUSH and POP operations should run in O(1) time.

<details>
 <summary>Answer</summary>
 
```js

class TwoStackInArr {
  /**
   * @param {array} size
   */
  constructor(size) {
    this.arr = new Array(size);
    this.topFirst = -1;
    this.topSecond = n;
  }

  /**
   * @param {number|string} value
   * @return {boolean|string}
   */
  pushFirst(value) {
    if (this.topFirst < this.topSecond - 1) {
      this.topFirst++;
      this.arr[this.topFirst] = value;
      return true;
    }
    return 'Stack overflow';
  }

  /**
   * @param {number|string} value
   * @return {boolean|string}
   */
  pushSecond(value) {
    if (this.topFirst < this.topSecond - 1) {
      this.topSecond--;
      this.arr[this.topSecond] = value;
      return true;
    }
    return 'Stack overflow';
  }

  /**
   * @param {number|string} value
   * @return {boolean|string}
   */
  popFirst() {
    if (this.topFirst >= 0) {
      const response = this.arr[this.topFirst];
      this.topFirst--;
      return response;
    }
    return 'Stack Underflow';
  }

  /**
   * @param {number|string} value
   * @return {boolean|string}
   */
  popSecond() {
    if (this.topSecond < this.arr.length) {
      const response = this.arr[this.topSecond];
      this.topSecond--;
      return response;
    }
    return 'Stack Underflow';
  }
}

```
</details>

- #### Stack insertion and deletion
Whereas a stack allows insertion and deletion of elements at only one end and a queue allows insertion at one end and deletion at the other end, a deque (double-ended queue) allows insertion and deletion at both ends. Write four O(1)-time procedures to insert elements into and delete elements from both ends of a deque constructed from an array.

- #### Implement a queue using two stacks.
Analyze the running time of the queue operations.

<details>
 <summary>Answer</summary>

```js
/**
 * Time complexity O(1)
 * Space complexity O(n)
 */
class QueueInTwoStacks {
  constructor() {
    this.firstStack = [];
    this.secondReverseStack = [];
  }

  /**
   * Time complexity O(1)
   * @param {number} x
   */
  enqueue(x) {
    this.firstStack.push(x);
  }

  /**
   * Time complexity O(1) based Amortized analysis
   * worst time complexity O(n)
   * @return {number} | -1 + console error
   */
  dequeue() {
    if (this.secondReverseStack.length === 0) {
      if (this.firstStack.length === 0) {
        console.log('queue underflow');
        return -1;
      }

      while (this.firstStack.length) {
        this.secondReverseStack.push(this.firstStack.pop());
      }
    }
    return this.secondReverseStack.pop();
  }
}
```

</details>

- #### Show how to implement a stack using two queues.
Analyze the running time of the stack operations.

<details>
 <summary>Answer</summary>

```js
/**
 * Time complexity O(1)
 * Space complexity O(n)
 */
class StackInTwoQueues {
  constructor() {
    this.firstQueue = [];
    this.secondReverseQueue = [];
  }

  /**
   * Time complexity O(1)
   * @param {number} x
   */
  push(x) {
    // Simulate enqueue
    this.firstQueue.push(x);
  }

  /**
   * Time complexity O(1) based Amortized analysis
   * worst time complexity O(n)
   * @return {number} | -1 + console error
   */
  pop() {
    if (this.secondReverseQueue.length === 0) {
      if (this.firstQueue.length === 0) {
        console.log('Stack underflow');
        return -1;
      }

      while (this.firstQueue.length) {
        //shift() => dequeue
        this.secondReverseQueue.push(this.firstQueue.shift());
      }
    }
    // shift() => dequeue
    return this.secondReverseQueue.shift();
  }
}
```

</details>

### LinkedList

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

- #### Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be changed.

<details>
 <summary>Answer</summary>
  
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  const resHead = {val: -1, next: null};
  let runner = resHead;
  resHead.next = head;

  while (runner.next !== null && runner.next.next !== null) {
    runner = swap(runner, runner.next, runner.next.next);
  }
  return resHead.next;
}

/*
 * @param {ListNode} head
 * @param {ListNode} node1
 * @param {ListNode} node2
 * @return {listNode}
 */
function swap(head, node1, node2) {
  const tail = node2.next;
  head.next = node2;
  node2.next = node1;
  node1.next = tail;
  return node1;
}
```

</details>

- #### Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be changed.

- #### Odd Even Linked List
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes. You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

<details>
 <summary>Answer</summary>

```js
/*
* Definition for singly-linked list.
* function ListNode(val) {
*  this.val = val;
*  this.next = null;
* }
*
* @param {ListNode} head
* @return {ListNode}
*/
function oddEvenList(head) {
 if (head === null) {
    return null;
  }
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
```
</details>

- #### Middle of the Linked List
Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.

<details>
 <summary>Answer</summary>

```js
function middleNode(head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
```
</details>

- #### Find N node
Implement function to find a N node from the end of Linked List.

<details>
 <summary>Answer</summary>

```js
function getNElValue(frontNode, target) {
  if (target < 1) {
    return -1;
  }

  let count = 1;
  let current = frontNode.next;
  let out = null

  while (current.next) {
    if (count === target) {
      out = frontNode.next;
    }
    current = current.next;
    count++;

    if (out !== null) {
      out = out.next;
    }
  }
  
  return out === null ? -1 : out.value;  
}
```
</details>

- #### Palindrome Linked List
Implement function to check is Linked List palindrome.

<details>
 <summary>Answer</summary>

```js
function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }
  let walker = head;
  let runner = head;
  let pre = null;
  while (runner !== null && runner.next !== null) {
    // move runner first, otherwise the next of the head will be already changed
    runner = runner.next.next;
    // reverse linked list
    nextWalker = walker.next;
    walker.next = pre;
    pre = walker;
    walker = nextWalker;
  }

  // after this the pre would be the head of our first half, 
  // while walker at the head of second half odd number length
  if (runner !== null) {
    walker = walker.next;
  }
  while (pre !== null && walker !== null) {
    if (pre.val !== walker.val) {
      return false;
    }
    pre = pre.next;
    walker = walker.next;
  }
  return true;
}
```
</details>

- #### Remove Duplicates from Sorted Linked List

<details>
 <summary>Answer</summary>

```js
function deleteDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
```
</details>

### Graph, DFS and BFS

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

### Tree traversal
- #### Convert Tree to Array

<details>
 <summary>Test Case Example</summary>
  
```js
console.log('It should return [1,2,3,4,5,6,7,8]',
convertTreeToArr({
  a : 1,
  b : 2,
  c : {
    a : 3,
    b : 4,
    c : 5,
    d : 6,
    e : {
      a : 7,
      b : 8
    }
  }
}).join('') === [1,2,3,4,5,6,7,8].join('') ? 'PASS' : 'FAIL');

```
</details>

<details>
 <summary>Iterative Answer</summary>
  
```js
function convertTreeToArr(tree) {
  const arr = [];
  const queue = [];
  queue.push(tree);

  while(queue.length) {
    const obj = queue.shift();
    for (let k in obj) {
      if (typeof obj[k] === 'object') {
        queue.push(obj[k]);
      }
      else {
        arr.push(obj[k]);
      }
    }
  }
  return arr;
}
```

</details>

<details>
 <summary>Recursive Answer</summary>
  
```js
function convertTreeToArrRec(tree) {
  let arr = [];

  for (let k in tree) {
    if (typeof tree[k] === 'object') {
      arr = arr.concat(convertTreeToArrRec(tree[k]));
    }
    else {
      arr.push(tree[k]);
    }
  }
  return arr;
}
```

</details>

### Binary Search
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

### Heap
- #### What is the time, and space complexity of heap sort algorithm?

<details>
 <summary>Answer</summary>
Time - O(n log(n)) </br>
Space - O(1)
</details>

- #### Implement HeapSort
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
    swap(arr, 0, i);
    size--;
    heapRoot(0);
  }
  return arr;
}

function swap(arr, keyA, keyB) {
  const temp = arr[keyA];
  arr[keyA] = arr[keyB];
  arr[keyB] = temp;
}

```

</details>
