/*
 * Complete the sockMerchant function in the editor below. It must return an integer 
 * representing the number of matching pairs of socks that are available.
 * sockMerchant has the following parameter(s): 
 * n: the number of socks in the pile
 * ar: the colors of each sock
 */
function sockMercant(n, ar) {
    const hash = {};
    let pairs = 0;
    ar.map(v => {
        hash[v] = hash[v] ? hash[v] + 1 : 1;
        if (hash[v] % 2 === 0) {
            pairs++;
        }
    });
    return pairs;
}

console.log('It should return 3:',
    sockMercant(9, [10,20, 20, 10, 10, 30, 50, 10, 20]),
    sockMercant(9, [10,20, 20, 10, 10, 30, 50, 10, 20]) === 3 ? 'PASS' : 'FAIL'
);

console.log('It should return 0:',
    sockMercant(9, '10 20 30 40 50 60 70 80 90'.split(' ')),
    sockMercant(9, '10 20 30 40 50 60 70 80 90'.split(' ')) === 0 ? 'PASS' : 'FAIL'
);
