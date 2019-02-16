/*
 * Convert int number to string without toString() methods: 123 => '123'
 */

function toStr(number) {
  if (number === 0) {
    return '0';
  }
  var needMinus = false;
  var str = '';
  if (number < 0) {
    number = number * -1;
    var needMinus = true;
  }
  while(number > 0) {
    str = number % 10 + str;
    number = (number - number % 10) / 10;
  }
  return needMinus ? '-' + str : str;
}

(() => {
  const test = 'test toStr';
  const it = ((description, num, expect) => {
    console.log(test, description, ': ', toStr(num) === expect ? 'PASS' : 'FAIL', toStr(num));
  });
  it('should convert int to str', 123, '123');
  it('should convert tiny int to str', 1, '1');
  it('should convert tiny 0 to str', 0, '0');
  it('should convert negative -123 to str', -123, '-123');
  it('should convert negative -1 to str', -1, '-1');
})();
