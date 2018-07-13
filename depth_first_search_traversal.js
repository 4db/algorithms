
/*
 * The non-recursive implementation is similar to breadth-first search but differs from it in two ways:
 * it uses a stack instead of a queue, and
 * it delays checking whether a vertex has been discovered until the vertex is popped from the stack rather than making this check before adding the vertex.
 * Performs a depth-first search on a graph represent an object of array edges(Adjacency matrix)
 * @param {string} root - The root|source vertex.
 * @param {object} tree - Graph, represented as object.
 * @returns {object} Object of parents: {'A' : 'None', 'B' : 'A', 'C' : 'A'}
 */
function depth_first_search_traversal(root, tree) {
    let stack = [];
    let visited  = {};
    visited[root] = 'None';
    stack.push(root);
    while(stack.length) {
        const current = stack.pop();
        for (let i = 0; i < tree[current].length; i++) {
            const node = tree[current][i];
            stack.push(node);
            if (!visited[node]) {
                visited[node] = current;
            }
        }
    }
    return visited;
}

(() => {
  console.log('Testing started: depth-first search traversal');
  const it = ((description, func) => {
    console.log(' => ' + description + ' => ' +  func());
  });

    //      A
    //    /  \
    //   B    C
    //  / \    \
    // D   E   F 
    /// \     / \
    //G H    I   J
    const adjacencyMatrix = {
      'A' : ['B', 'C'],
      'B' : ['D', 'E'],
      'C' : ['F'],
      'D' : ['G', 'H'],
      'E' : [],
      'F' : ['I', 'J'],
      'G' : [],
      'H' : [],
      'I' : [],
      'J' : [],
    };

  it('#1 Test root node', () => {
    const input    = 'A';
    const expect   = 'None';
    const response = depth_first_search_traversal(input, adjacencyMatrix);
    if (expect === response[input]) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#2 Test parent of leaf J', () => {
    const input    = 'A';
    const expect   = 'F';
    const response = depth_first_search_traversal(input, adjacencyMatrix);
    if (expect === response['J']) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#3 Test parent of leaf G', () => {
    const input    = 'A';
    const expect   = 'D';
    const response = depth_first_search_traversal(input, adjacencyMatrix);
    if (expect === response['G']) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });
})();
