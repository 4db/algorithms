/*
 * The recursive implementation breadth-first search traversal
 * Performs a recursion depth-first search on a graph represent an object of array edges
 * @param {string} source - The source vertex.
 * @param {object} tree - Graph, represented as object.
 * @returns {object} Object of parents: {'A' : 'None', 'B' : 'A', 'C' : 'A'}
 */
function depth_first_search_traversal(root, tree) {
  var visited   = {};
  visited[root] = 'None';

  recursionDFSvisit = function(source, tree) {
	for (let i = 0; i < tree[source].length; i++) {
		const vertex = tree[source][i];
        if (!visited[vertex]) {
            visited[vertex] = source;
            recursionDFSvisit(vertex, tree);
        }
	}
  };
  // Search from start vertex root
  recursionDFSvisit(root, tree);
  return visited;
};

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
