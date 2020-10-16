module.exports = function reverse (n) {

    const str = Math.abs(n).toString().split('');

    return str.reverse().join('');
  
}
