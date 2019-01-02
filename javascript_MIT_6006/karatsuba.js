/**
 *
 * Karatsuba multiplication algorithm
 * Θ(d log2 3 ) = Θ(d 1.584...)
 *
 *            +------+------+
 *            |  x1  |  x0  |
 *            +------+------+
 *                   *
 *            +------+------+
 *            |  y1  |  y0  |
 *            +------+------+
 *                   =
 *     +-------------+-------------+
 *  +  |    x1*y1    |    x0*y0    |
 *     +----+-+------+------+------+
 *          . .             .
 *          . .             .
 *          +-+------+------+
 *       +  | x0*y1 + x1*y0 |
 *          +-+------+------+
 *
 * Karatsuba Multiplication
 * @param  {Number} x - first number
 * @param  {Number} y - second number
 * @return {Number} Multiply of x and y
 */
 
function karatsubaMulti(x, y) {
  var xLen = ('' + x).length;
  var yLen = ('' + y).length;
  if (xLen === 1 || yLen === 1) {
    return x * y;
  }
  var n           = parseInt( (xLen > yLen ? yLen : xLen) / 2);
  var tenpowhalfn = Math.pow(10, n);
  var tenpown     = Math.pow(10, 2 * n);

  var x1 = parseInt(x / tenpowhalfn);
  var x0 = x % tenpowhalfn;
  var y1 = parseInt(y / tenpowhalfn);
  var y0 = y % tenpowhalfn;

  return tenpown * karatsubaMulti(x1, y1) + tenpowhalfn * (karatsubaMulti(x1, y0) + karatsubaMulti(x0, y1)) + karatsubaMulti(x0, y0);
}

console.log(karatsubaMulti(99999999999, 99999999999), ' == ', 99999999999 * 99999999999);
console.log(karatsubaMulti(12312321432412341234, 43214231432141234213), ' == ', 12312321432412341234 * 43214231432141234213);
