/**
 * 884. Uncommon Words from Two Sentences
 *
 * We are given two sentences A and B. A word is uncommon 
 * if it appears exactly once in one of the sentences,
 * and does not appear in the other sentence.
 * Return a list of all uncommon words. 
 *
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function uncommonFromSentences(A, B) {
  A = A.split(' ');
  B = B.split(' ');
  const isUnCommon = w => {
    return (A.includes(w) && !B.includes(w)
     && A.indexOf(w) === A.lastIndexOf(w))
    ||
    (B.includes(w) && !A.includes(w)
    && B.indexOf(w) === B.lastIndexOf(w));
  }
  return [... new Set(A.concat(B))].filter(w => isUnCommon(w));
}

console.log('It should return ["sweet","sour"]', uncommonFromSentences("this apple is sweet",
"this apple is sour"));

console.log('It should return []', uncommonFromSentences("",
""));
