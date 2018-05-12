/*
 * Performs a breadth-first search on a graph represent an object of array edges
 * @param {string} source - The source vertex.
 * @param {object} tree - Graph, represented as object.
 * @returns {object} Object of objects describing each vertex, like
 *     { vertex : {distance: _, parent: _ } }
 */
function doBFS(sourse, tree) {
    var pathInfo      = {};
    var level         = 1;
    var frontier      = [sourse];
    pathInfo[sourse]  = {dinstance : 0, parent: null};
    while(frontier.length) {
        var next = [];
        frontier.map(function(u) {
            tree[u].map(function(v) {
                if (pathInfo[v] === undefined) {
                    pathInfo[v] = {dinstance : level, parent: u};
                    next.push(v);
                }
            });
        });
        frontier = next;
        level++;
    }
    return pathInfo;
};

// Uncomment for testing
/*
var tree = {
        'A': ['B', 'C', 'D', 'E'],
        'B': ['A', 'F', 'G'],
        'C': ['A', 'H'],
        'D': ['A', 'I', 'J'],
        'E': ['A', 'K', 'L'],
        'F': ['B', 'G', 'M', 'N', 'O'],
        'G': ['B', 'F', 'P', 'Q', 'R'],
        'H': ['C', 'S'],
        'I': ['D'],
        'J': ['D', 'T', 'U'],
        'K': ['E'],
        'L': ['E', 'V'],
        'M': ['F'],
        'N': ['F'],
        'O': ['F'],
        'P': ['G'],
        'Q': ['G'],
        'R': ['G'],
        'S': ['H', 'W', 'X'],
        'T': ['J'],
        'U': ['J', 'Y', 'Z'],
        'V': ['L'],
        'W': ['S'],
        'X': ['S'],
        'Y': ['U'],
        'Z': ['U']
};
for (root in tree) {
    var info = doBFS(root, tree);
    console.log('Generated path info for ' + root + '.', info);
    for (pathTo in info) {
        printPathTo(pathTo, info, root)
    }
}

function printPathTo(source, info, root) {
    var path = [source];
    path.push(info[source].parent);
    var next = info[source].parent;
    if (!info.hasOwnProperty(next)) {
        return console.log('          ' + source + ' is root');
    }
    while(info[next].parent) {
        path.push(info[next].parent);
        next = info[next].parent;
    }
    console.log('          Distance to ' + source + ':' + info[source].dinstance + '; short path: ' + path.reverse().join(' -> ')); 
}
*/
