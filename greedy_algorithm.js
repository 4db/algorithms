/**
 * Given a string {letters} and a set of {words}.
 * Find the longest word in {words} that is subsequence of {letters}
 *
 * O(N + L * log N)
 *
 * @param words {array}
 * @param letters {string}
 * @return {string | -1}
 */
function longestWord(words, letters) {
  // O(N letters) space and speed
  const letterPositions = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (!letterPositions[letter]) {
      letterPositions[letter] = [];
    }
    letterPositions[letter].push(i);
  }

  // Sorted words by length O(N)
  words = words.sort((a,b) => {
    return a.length < b.length;
  });
  
  // O(N words * L averange length);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    for (let k = 0; k < word.length; k++) {
      const letter = word[k];
      if (!letterPositions[letter]) {
        break;
      }
      if (k === word.length - 1) {
        return word;
      }
    }
  }
  return -1;
}

function it(desc, input, expect) {
	console.log(`Starting testing: ${desc}`);
	console.log('     => ' + input === expect ? 'PASSED' : 'FAILED');
}
it('#1 Find apple', longestWord(['apple', 'aa', 'ppp', 'blabla'], 'applee'), 'apple');
