/*
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
  const letterPositions = getLetterPositions(letters);
  // Sorted words by length O(N)
  words = words.sort((a,b) => {
    return a.length < b.length;
  });
  console.log(words);
  // O(N words * L averange length);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLettersPosition = getLetterPositions(word);
    
    for (let k = 0; k < word.length; k++) {
      const letter = word[k];
      if (!letterPositions[letter]) {
        break;
      }
      if (wordLettersPosition[letter].length > letterPositions[letter].length) {
        break;
      }
      if (k === word.length - 1) {
        return word;
      }
    }
  }
  return -1;
}

/*
 * Generate hash object of {letters} positions
 * 
 * O(N letters) space and speed
 *
 * @param letters {string}
 * @return {object}
 */
function getLetterPositions(letters) {
  const letterPositions = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (!letterPositions[letter]) {
      letterPositions[letter] = [];
    }
    letterPositions[letter].push(i);
  }
  return letterPositions;
}

/*
 * Test function with console.log response
 * @param desc {string}
 * @param input {string}
 * @param expect {string}
 * return {print text}
 */
function it(desc, input, expect) {
	console.log(`Starting testing: ${desc}`);
    if (input === expect) {
       return console.log('   => PASSED');
    }
    console.log('    => FAILED', input, expect);
}
console.log(longestWord(['apple', 'aa', 'ppp', 'blabla'], 'applee'));
it('#1 Find apple', longestWord(['apple', 'aa', 'ppp', 'blabla'], 'applee'), 'apple');
it('#2 Find bla', longestWord(['apple', 'aa', 'ppp', 'blabla', 'bla'], 'apleebla'), 'bla');
