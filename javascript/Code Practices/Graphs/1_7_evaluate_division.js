/**
 * 399. Evaluate Division
 * Equations are given in the format A / B = k,
 * where A and B are variables represented as strings, and k is a real number 
 * (floating point number). Given some queries, return the answers. 
 * If the answer does not exist, return -1.0.
 * 
 *
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

function calcEquation(equations, values, queries) {
    let neighbours = {};

    // Initi adjacency list
    for (let i = 0; i < equations.length; i++) {
        neighbours[equations[i][0]] = [];
        neighbours[equations[i][1]] = [];
    }
    for (let i = 0; i < equations.length; i++) {
        neighbours[equations[i][0]].push([equations[i][1], values[i]]);
        neighbours[equations[i][1]].push([equations[i][0], 1 / values[i]]);
    }
    
    res = [];
    for (i of queries) {
        res.push(evaluateExpression(i, neighbours));
    }
    return res;
};


function evaluateExpression(expression, neighboursList) {
    if (!(expression[0] in neighboursList) 
        || !(expression[1] in neighboursList)) { 
        return -1;
    }

    if (expression[0] === expression[1]) {
        return 1;
    } 
    
    let q = neighboursList[expression[0]].slice();
    let checked = [];
    
    while (q.length > 0) {
        const elem = q.shift();
        if (elem[0] === expression[1]) { 
            return elem[1] 
        }
        checked.push(elem[0]);
        
        const neighbours = neighboursList[elem[0]];
        for (let n = 0; n < neighbours.length; n++) {
            let nextToCheck = neighbours[n];
            if (checked.includes(nextToCheck[0])) {
                continue;
            }
            q.push([nextToCheck[0], nextToCheck[1]*elem[1]]);
        }
    }
    
    
    return -1;
}

