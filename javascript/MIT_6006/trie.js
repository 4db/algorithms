
function TrieNode(key) {
  var vm      = this;
  vm.key      = key;
  vm.parent   = null;
  vm.children = {};
  vm.end      = false;

  vm.getWord = function() {
    var output = [];
    var node = vm;
    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
    return output.join('');
  }
}

function Trie() {
  var vm         = this;
  vm.root        = new TrieNode(null);
  vm.outputLimit = 3;

  vm.insert = function(word) {
    var node = vm.root;
    for(var i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      }
      node = node.children[word[i]];
      if (i == word.length-1) {
        node.end = true;
      }
    }
  }

  vm.contains = function(word) {
    var node = vm.root;
    for(var i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        return false;
      }
      node = node.children[word[i]];
    }
    return node.end;
  }

  vm.find = function(prefix) {
    var node = vm.root;
    var output = [];
    for(var i = 0; i < prefix.length; i++) {
      if (!node.children[prefix[i]]) {
      console.log('here!')
        return output;
      }
      node = node.children[prefix[i]];
    }
    vm.findAll(node, output);
    return output;
  }

  vm.findAll = function(node, arr) {
    if (arr.length === vm.outputLimit) {
      return;
    }
    if (node.end) {
      arr.push(node.getWord());
    }
    for (var child in node.children) {
      vm.findAll(node.children[child], arr);
    }
  }
}

var trie = new Trie();

// insert few values
// trie.insert("do");
// trie.insert("doc");
// trie.insert("doom");
// trie.insert("door");
// trie.insert("deep");
// trie.insert("dark");

// console.log(trie.contains("do"));  // true
// console.log(trie.contains("dump")); // false

// console.log(trie.find("do")); // [ 'do' ]
