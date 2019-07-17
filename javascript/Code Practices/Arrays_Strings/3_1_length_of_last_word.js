/*
 * 58. Length of Last Word
 *
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
 * return the length of last word in the string.
 * @param {string} str
 * @return {number}
function lengthOfLastWord(str) {
  const id = str.lastIndexOf(' ');
  return id === -1 ? 0 : str.length - id - 1;
}

console.log('It should return 5', lengthOfLastWord('Hello World') === 5)
console.log('It should return 0', lengthOfLastWord('HelloWorld') === 0)
console.log('It should return 0', lengthOfLastWord(' HelloWorld'), lengthOfLastWord(' HelloWorld') === 0)
