/*
 * Performs a recursion depth-first search on a graph represent an object of array edges
 * @param {string} source - The source vertex.
 * @param {object} tree - Graph, represented as object.
 * @returns {object} Object of parents: {'A' : 'None', 'B' : 'A', 'C' : 'A'}
 */
function doDFS(root, tree) {
  var parentInfo   = {};
  parentInfo[root] = 'None';

  recursionDFSvisit = function(source, tree) {
    tree[source].map(function(vertex) {
      if (!parentInfo[vertex]) {
        parentInfo[vertex] = source;
        recursionDFSvisit(vertex, tree);
      }
    });
  };
  // Search from start vertex root 
  recursionDFSvisit(root, tree);

  // Finish explore entire graph
  for (source in tree) {
    if (!parentInfo[source]) {
      parentInfo[source] = 'None';
	    recursionDFSvisit(source, tree);
    }
  }
  return parentInfo;
};

/* Uncomment for testing on Directed graph
var tree = {
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
for (root in tree) {
  var info = doDFS(root, tree);
  console.log('Generated path info for ' + root + '.', info);
  var recursionPrint = function(source, obj) {
    if (obj[source]) {
      parents.push(source);
      return recursionPrint(obj[source], obj);
     }
  };
  for (source in info) {
    var parents = [];
    recursionPrint(info[source], info)
     console.log('Print parents for ' + source, parents);
    }
}
*/
