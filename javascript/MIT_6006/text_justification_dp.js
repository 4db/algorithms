function textJustificationDynamicProgramming(text, line_length) {
  var words = text.split(' ');
  var memo = [];
  memo[words.length] = [0, 0];


var calcBadness = function (line) {
  var diff = line_length - line.length;
  if (diff >= 0) {
    return Math.pow((diff), 2);
  }
  return Number.MAX_VALUE;
}
  for (var i = words.length - 1; i >= 0; i--) {
    var best = [Number.MAX_VALUE, i + 1];
    for (var j = i + 1; j <= words.length; j++) {
      var totalScore = calcBadness(words.slice(i, j).join(' ')) + memo[j][0];
      if (totalScore < best[0]) {
        best = [totalScore, j];
      }
    }
    memo[i] = best;
  }
  var totalBadness = 0;
  var pointer = 0;
  var results = [];
  while (pointer < words.length) {
    var line = words.slice(pointer, memo[pointer][1]).join(' ');
    totalBadness += calcBadness(line);
    results.push(line);
    [_, pointer] = memo[pointer];
  }
  return results;
}

console.log(textJustificationDynamicProgramming('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".', 50).join('\n'));
