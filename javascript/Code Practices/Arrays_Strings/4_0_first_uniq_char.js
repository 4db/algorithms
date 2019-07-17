function firstUniqChar(str) {
  const memo = new Map();
  for (char of str) {
    memo.set(char, !memo.has(char) ? true : false);
  }
  for (char of str) {
    if (memo.get(char) === true) {
      return char;
    }
  }
  return '';
}

console.log('It should return a', firstUniqChar('a'));
console.log('It should return ""', firstUniqChar('aaaaaa'));
console.log('It should return t', firstUniqChar('leetcodel'));
console.log('It should return v', firstUniqChar('loveleetcode'));
