#### Javascript Algorithm implementation

<table>
    <tbody>
    <tr>
      <th>Data Structure</th>
      <th colspan="4">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="4">Worst</th>
      <th>Worst</th>
    </tr>
    <tr>
      <th></th>
      <th>Access</th>
      <th>Search</th>
      <th>Insertion</th>
      <th>Deletion</th>
      <th></th>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Array_data_structure">Array</a></td>
      <td><code>O(1)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">Stack</a></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)">Queue</a></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists">Singly-Linked List</a></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Doubly_linked_list">Doubly-Linked List</a></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(1)</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Hash_table">Hash Table</a></td>
      <td><code>N/A</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Binary_search_tree">Binary Search Tree</a></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/B_tree">B-Tree</a></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/AVL_tree">AVL Tree</a></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(log(n))</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <th></th>
      <th colspan="4">Array Sorting Algorithms</th>
      <th></th>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Quicksort">Quicksort</a></td>
      <td colspan="4"><code>Ω(n log(n)) / O(n^2)</code></td>
      <td><code>O(log(n))</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Merge_sort">Mergesort</a></td>
      <td colspan="4"><code >O(n log(n))</code></td>
      <td><code>O(n)</code></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Difference between maximum and minimum number 'k'" href="https://en.wikipedia.org/wiki/Counting_sort">Counting Sort</a></td>
      <td colspan="4"><code >O(n+k)</td>
      <td><code>O(k)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a></td>
      <td colspan="4"><code >O(n^2)</td>
      <td><code>O(1)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Heapsort">Heapsort</a></td>
      <td colspan="4"><code >O(n log(n))</td>
      <td><code>O(1)</code></td>
    </tr>
    <tr>
      <th></th>
      <th colspan="4">Graph Algorithms</th>
      <th></th>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Tree_traversal">Tree traversal</a></td>
      <td colspan="4"><code >O(N + N-1)</td>
      <td><code>O(N)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">Dijkstra</a></td>
      <td colspan="4"><code >O(E+VlogV)</td>
      <td><code>O(V^2)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Breadth-first_search">Breadth first search</a></td>
      <td colspan="4"><code >O(E+V)</td>
      <td><code>O(V)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Depth-first_search">Depth first search</a></td>
      <td colspan="4"><code >O(E+V)</td>
      <td><code>O(V)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm">Bellman Ford</a></td>
      <td colspan="4"><code >O(EV)</td>
      <td><code>O(V)</code></td>
    </tr>
</tbody>
</table>


[MIT Course Number 6.006](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/)

 - Lecture 1: Algorithmic Thinking, Peak Finding
 - Lecture 2: Models of Computation, Document Distance
    - [signly_linked_list.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/signly_linked_list.js)
    - [document_distance.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/document_distance.js)
 - Lecture 3: Insertion Sort, Merge Sort
    - [quick_sort.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/quick_sort.js)
    - [merge_sort.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/merge_sort.js)
    - [selection_sort.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/selection_sort.js)
 - Lecture 4: Heaps and Heap Sort
    - [heap_sort.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/heap_sort.js)
 - Lecture 5: Binary Search Trees, BST Sort
    - [binary_search_tree.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/binary_search_tree.js)
 - Lecture 6: AVL Trees, AVL Sort
 - Lecture 7: Counting Sort, Radix Sort, Lower Bounds for Sorting
     - [counting_sort.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/counting_sort.js)
 - Lecture 8: Hashing with Chaining
   - [hash_chaining.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/hash_chaining.js)
 - Lecture 9: Table Doubling, Karp-Rabin
 - Lecture 10: Open Addressing, Cryptographic Hashing
     - [hash_open_addressing.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/hash_open_addressing.js)
 - Lecture 11: Integer Arithmetic, Karatsuba Multiplication
   - [karatsuba.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/karatsuba.js) - Karatsuba multiplication algorithm
 - Lecture 12: Square Roots, Newton's Method
 - Lecture 13: Breadth-First Search (BFS)
    - [breadth_first_search.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/breadth_first_search.js)
    - [breadth_first_search_queue.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/breadth_first_search_queue.js) - with an Queue Classes
    - [breadth_first_search_traversal.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/breadth_first_search_queue.js) 
 - Lecture 14: Depth-First Search (DFS), Topological Sort
    - [depth_first_search.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/depth_first_search.js)
    - [depth_first_search_recursion.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/depth_first_search_recursion.js)
    - [depth_first_search_traversal.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/depth_first_search_traversal.js)
    - [depth_first_search_traversal_recursion.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/depth_first_search_traversal_recursion.js)
   - [topological_sort.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/topological_sort.js)
 - Lecture 15: Single-Source Shortest Paths Problem
   - Unweighted, undirected [graph.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/graph.js)
 - Lecture 16: Dijkstra
     - [dijkstra.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/dijkstra.js)
 - Lecture 17: Bellman-Ford
     - [bellman_ford.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/bellman_ford.js)
 - Lecture 18: Speeding up Dijkstra
 - Lecture 19: Dynamic Programming I: Fibonacci, Shortest Paths
     - [fibonacci.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/fibonacci.js)
 - Lecture 20: Dynamic Programming II: Text Justification, Blackjack
      - [text_justification_dp.js](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/text_justification_dp.js)
 - Lecture 21: Dynamic Programming III: Parenthesization, Edit Distance, Knapsack
 - Lecture 22: Dynamic Programming IV: Guitar Fingering, Tetris, Super Mario Bros.
 - Lecture 23: Computational Complexity
 - Lecture 24: Topics in Algorithms Research
      - [Greedy Algorithm](https://github.com/aldb/algorithms/blob/master/javascript_MIT_6006/greedy_algorithm.js)
