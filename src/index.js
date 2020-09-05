module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let array = " ";
    for (i = str.length-1; i >= 0; i--) {
        array = array + str[i];
    }
    return array;
}
