/* 310. Minimum Height Trees
 * For an undirected graph with tree characteristics, we can choose any node as the root.
 * The result graph is then a rooted tree. Among all possible rooted trees, those with minimum
 * height are called minimum height trees (MHTs). Given such a graph, write a function to find 
 * all the MHTs and return a list of their root labels.
 */
/*
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 function findMinHeightTrees(n, edges) {
    // edge case
    if (!n || n === 0 || n - 1 !== edges.length) { return []; }
    if (n === 1) { return [0]; }
    
    // calculate edges
    let hash = {};
    for (let i = 0; i < n; i++) {
        hash[i] = [];
    }
    
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        hash[edge[0]].push(edge[1]);
        hash[edge[1]].push(edge[0]);
    }
    
    // remove leaves via BFS
    let leaves = [];
    let res = [];
    for (let i = 0; i < n; i++) {
        if (hash[i].length === 1) {
            leaves.push(i);
        }
    }
    
    let count = n;
    while (count > 2) {
        let size = leaves.length;
        count -= size;
        let newLeaves = [];
        for (let i = 0; i < size; i++) {
            let node = leaves.shift();
            let nextNodes = hash[node];
            for (let j = 0; j < nextNodes.length; j++) {
                let nextNode = nextNodes[j];
                let index = hash[nextNode].indexOf(node);
                hash[nextNode].splice(index, 1);
                if (hash[nextNode].length === 1) {
                    newLeaves.push(nextNode);
                }
            }
        }
        leaves = newLeaves;
    }
    
    return leaves;
}

console.log('It should return [1]' , findMinHeightTrees(4, [[1,0],[1,2],[1,3]])[0] === 1 ? 'PASS' : 'FAIL');
