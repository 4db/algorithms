/**
 * Dijkstra algorithm implementation based on simplify priority Queue (Array + splice)
 * @param  {string} root
 * @param  {object} graph - Adjacency list
 * @return {object} - 'A' : {distance : 0, parent: 'None'}
 */
function dijkstra(root, graph) {
    const priorityQueueInsertOrUpdate = function(current) {
        for (var i = 0; i < priorityQueue.length; i++) {
            if (distance[current].distance > distance[priorityQueue[i]].distance) break;
        }                
        priorityQueue.splice(i, 0, current);
    }

    const distance = {[root] : {distance : 0, parent: 'None'}};
    const priorityQueue = [root];

    while(priorityQueue.length) {
        const current = priorityQueue.shift();
        for (node in graph[current]) {
            const weigth = graph[current][node];
            if (!distance[node] || distance[node] > distance[current].distance + weigth) {
                distance[node] = {distance : distance[current].distance + weigth, parent: current};
                priorityQueueInsertOrUpdate(node);
            }
        }
    }
    return distance;
}


(() => {
  console.log('Testing started: Dijkstra');
  const it = ((description, func) => {
    console.log(' => ' + description + ' => ' +  func());
  });

//              A
//            /   \
//          1      1
//         /        \
//        B          C
//      /   \          \
//    1       1        10
//   /         \         \
//  D          E -- 1 -- F
    const adjacencyMatrix = {
      'A' : {'B' : 1, 'C' : 1},
      'B' : {'D' : 1, 'E' : 1},
      'C' : {'F' : 10},
      'D' : {},
      'E' : {'F' : 1},
      'F' : {},
    };

  it('#1 Test root node', () => {
    const input    = 'A';
    const expect   = 'None';
    const response = dijkstra(input, adjacencyMatrix);
    console.log(response)
    if (expect === response[input].parent) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#2 Test shortest path to F ', () => {
    const input    = 'A';
    const expect   = 3;
    const response = dijkstra(input, adjacencyMatrix);
    if (expect === response['F'].distance) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#3 Test shortest path to not existing', () => {
    const input    = 'A';
    const expect   = 'D';
    const response = dijkstra(input, adjacencyMatrix);
    if (expect === response['G']) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });
})();
