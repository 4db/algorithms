/*
 * The non-recursive implementation an breadth-first search traversal (queue - Array)
 * Performs a breadth-first search on a graph represent an object of array edges(Adjacency matrix)
 * @param {string} root - The root|source vertex.
 * @param {object} tree - Graph, represented as object.
 * @returns {object} Object of distances and parents: {A :{distance: 0, parent: "None"}}
 */
function breadth_first_search_traversal(root, graph) {
    const distance = {[root] : {distance : 0, parent: 'None'}};
    const queue = [root];
    while(queue.length) {
        const current = queue.shift();
        for (let i = 0; i < graph[current].length; i++) {
            const node = graph[current][i];
            if (!distance[node]) {
                distance[node] = {distance : distance[current].distance + 1, parent: current};
                queue.push(node);
            }
        }
    }
    return distance;
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
    const expect   = {distance : 0, parent: 'None'};
    const response = breadth_first_search_traversal(input, adjacencyMatrix);

    if (expect.parent === response[input].parent) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#2 Test parent of leaf J', () => {
    const input    = 'A';
    const expect   = {distance: 3, parent: "F"};
    const response = breadth_first_search_traversal(input, adjacencyMatrix);
    if (expect.parent === response['J'].parent) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#3 Test parent of leaf G', () => {
    const input    = 'A';
    const expect   = {distance: 3, parent: "D"};
    const response = breadth_first_search_traversal(input, adjacencyMatrix);
    if (expect.parent === response['G'].parent) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });
})();
