module.exports = function reverse (n) {
   if (n < 0) {
        let positiveNum = -n;
        return +positiveNum.toString().split('').reverse().join('');
      }
      return +n.toString().split('').reverse().join('');
}
