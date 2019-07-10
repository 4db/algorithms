/*
 * @param array arr
 * @return object
 */
function getOut(arr) {
  const adList = {};
  let out = null;
  
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    el['child'] = [];
    if (el.parent === null) {
      out = el;
    }
    const inpArr = [];
    
    for (let j = 0; j < arr.length; j++) {
      if (el.id === arr[j].parent) {
        inpArr.push(j);
      }
    }
    
    adList[el.id] = inpArr;
  }
  
  out = setChilds(out, arr, adList);
  return out;
}

/*
 * Recursivly build a tree by AdjencyList
 * @param object root
 * @param array arr
 * @param object adList
 * @return object
 */
function setChilds(root, arr, adList) {
  adList[root.id].map(index => {
     root['child'].push(setChilds(arr[index], arr, adList));
  });
  return root;
}

const arr = [
  { "id":4, "parent":2 },
  { "id":1, "parent":null },
  { "id":2, "parent":1 },
  { "id":5, "parent":3 },
  { "id":3, "parent":1 },
];
const expected = '{"id":1,"parent":null,"child":[{"id":2,"parent":1,"child":[{"id":4,"parent":2,"child":[]}]},{"id":3,"parent":1,"child":[{"id":5,"parent":3,"child":[]}]}]}';
console.log('It should return expected object', JSON.stringify(getOut(arr)) === expected ? 'PASS' : 'FAIL');
