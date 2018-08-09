class DocumentDistance {
  constructor() {
    this.vec1   = null;
    this.vec2   = null;
    this.text1  = null;
    this.text2  = null;
  }

  setVector(text) {
    let obj = {};
    text.split(' ').map((w) => {
      obj[w] = obj[w] ? obj[w] + 1 : 1;
    });
    return obj;
  }

  getConsine(text1, text2) {
    this.vec1 = this.setVector(text1);
    this.vec2 = this.setVector(text2);
    let numerator = 0;
    this.intersection(this.vec1, this.vec2).map((word) => {
      numerator =numerator + (this.vec1[word] * this.vec2[word]);
    });

    let denominator = Math.sqrt(this.getSum(this.vec1)) * Math.sqrt(this.getSum(this.vec2))

    return !denominator ? 0.0 : numerator / denominator;
  }

  getSum(obj) {
    let sum = 0;
    for (let x in obj) {
      sum = sum + obj[x] ** 2;
    }
    return sum;
  }

  intersection(o1, o2) {
      return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
  }
}

(() => {
  console.log('Testing started: Document Distance');
  const it = ((description, func) => {
    console.log(' => ' + description + ' => ' +  func());
  });

  it('#1 Get distance', () => {
    const docDis   = new DocumentDistance();
    const input1   = 'This is a foo bar sentence';
    const input2   = 'This sentence is similar to a foo bar sentence';
    const expect   = 0.8616404368553293;

    const response = docDis.getConsine(input1, input2);
    if (expect === response) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });
})();
