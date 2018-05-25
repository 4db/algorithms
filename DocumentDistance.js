function DocumentDistance() {
  var vm  = this;
  vm.vec1   = null;
  vm.vec2   = null;
  vm.text1  = null;
  vm.text2  = null;

  vm.setVector = function(text) {
    var obj = {};
    text.split(' ').map(function(w) {
      obj[w] = obj[w] ? obj[w] + 1 : 1;
    });
    return obj;
  }
  
  vm.getConsine = function(text1, text2) {
    vm.vec1 = vm.setVector(text1);
    vm.vec2 = vm.setVector(text2);
    var numerator  = 0;
    vm.intersection(vm.vec1, vm.vec2).map(function(word) {
      numerator =numerator + (vm.vec1[word] * vm.vec2[word]);
    });

    var denominator = Math.sqrt(vm.getSum(vm.vec1)) * Math.sqrt(vm.getSum(vm.vec2))

    return !denominator ? 0.0 : numerator / denominator;
  }

  vm.getSum = function(obj) {
    var sum = 0;
    for (x in obj) {
      sum = sum + obj[x]**2;
    }
    return sum;
  }

  vm.intersection = function(o1, o2) {
    return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
  }
}

var dd = new DocumentDistance(); 
dd.getConsine('This is a foo bar sentence', 'This sentence is similar to a foo bar sentence');
