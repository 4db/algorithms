/*
 * The non-recursive implementation an breadth-first search (queue - Array)
 * Performs a breadth-first search on a graph represent an object of array edges(Adjacency matrix)
 * @param {string} root - The root|source vertex.
 * @param {object} tree - Graph, represented as object.
 * @returns {object|false} Object of distances and parents with shortes path: {A :{distance: 0, parent: "None"}} or false
 */
function breadth_first_search(root, graph, search) {
    const distance = {[root] : {distance : 0, parent: 'None'}};
    const queue = [root];
    while(queue.length) {
        const current = queue.shift();
		if (current === search) {
			return distance;
		}
        for (let i = 0; i < graph[current].length; i++) {
            const node = graph[current][i];
            if (!distance[node]) {
                distance[node] = {distance : distance[current].distance + 1, parent: current};
                queue.push(node);
            }
        }
    }
    return false;
};

(() => {
  console.log('Testing started: breadth first search traversal');
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
	const search   = 'A';
    const expect   = {distance : 0, parent: 'None'};
    const response = breadth_first_search(input, adjacencyMatrix, search);
    if (expect.parent === response[input].parent) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#2 Test parent of leaf J', () => {
    const input    = 'A';
	const search   = 'J';
    const expect   = {distance: 3, parent: "F"};
    const response = breadth_first_search(input, adjacencyMatrix, search);
    if (expect.parent === response['J'].parent) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#3 Test parent of leaf M - not exist', () => {
    const input    = 'A';
	const search   = 'M';
    const expect   = false;
    const response = breadth_first_search(input, adjacencyMatrix, search);
    if (expect === response) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });
})();
