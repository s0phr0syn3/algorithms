function reverseString(str) {
  var strArray = [];
  var reversedArray = [];
  strArray = str.split('');
  reversedArray = strArray.reverse();
  return reversedArray.join('');
}
