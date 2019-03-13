### Code practices in algorithmic/coding challenges.


#### Big O Complexities cheatsheet:

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
