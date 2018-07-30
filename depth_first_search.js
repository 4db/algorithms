/*
 * O(|V| + |E|) 
 * The non-recursive implementation is similar to breadth-first search but differs from it in two ways:
 * it uses a stack instead of a queue, and
 * it delays checking whether a vertex has been discovered until the vertex is popped from the stack rather than making this check before adding the vertex.
 * Performs a depth-first search on a graph represent an object of array edges(Adjacency matrix)
 * @param {string} root - The root|source vertex.
 * @param {object} tree - Graph, represented as object.
 * @param {string} search - The search node
 * @returns {bolean}
 */
function depthFirstSearch(root, tree, search) {
    let stack = [];
    let visited  = {};
    visited[root] = 'None';
    stack.push(root);
    while(stack.length) {
        const current = stack.pop();
        if (current === search) {
            return true;
        }
        for (let i = 0; i < tree[current].length; i++) {
            const node = tree[current][i];
            stack.push(node);
            if (!visited[node]) {
                visited[node] = current;
            }
        }
    }
    return false;
}

(() => {
  console.log('Testing started: depth-first search');
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

  it('#1 Search root node', () => {
    const root     = 'A';
    const input    = 'A';
    const expect   = true;
    const response = depthFirstSearch(root, adjacencyMatrix, input);
    if (expect === response) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#1 Search not exist node', () => {
    const root     = 'A';
    const input    = 'X';
    const expect   = false;
    const response = depthFirstSearch(root, adjacencyMatrix, input);
    if (expect === response) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#1 Search leaf node', () => {
    const root     = 'A';
    const input    = 'G';
    const expect   = true;
    const response = depthFirstSearch(root, adjacencyMatrix, input);
    if (expect === response) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });
})();
