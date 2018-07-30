/*
 * O(|V| + |E|) 
 * The recursive implementation breadth-first search
 * Performs a recursion depth-first search on a graph represent an object of array edges
 * @param {string} source - The source vertex.
 * @param {object} tree - Graph, represented as object.
 * @param {string} search - The search node
 * @returns {object} Object of parents: {'A' : 'None', 'B' : 'A', 'C' : 'A'}
 */
function depthFirstSearch(root, tree, search) {
  let visited   = {};
  visited[root] = 'None';

  recursionDFSvisit = function(source, tree, search) {
    if (source === search) {
        return true;
    }
    for (let i = 0; i < tree[source].length; i++) {
        const vertex = tree[source][i];
        if (!visited[vertex]) {
            visited[vertex] = source;
            if (recursionDFSvisit(vertex, tree, search) === true) {
                return true;
            }
        }
    }
    return false;
  };
  // Search from start vertex root
  return recursionDFSvisit(root, tree, search);
};

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
