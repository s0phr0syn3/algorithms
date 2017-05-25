function binaryAgent(str) {
  // Split str on spaces
  var binaryArray = str.split(' ');
  // This is our return string
  var newStr = '';
  for (var i = 0; i < binaryArray.length; i++) {
    // Convert each value in binaryArray to a decimal value using parseInt (base 2 for binary)
    // Using the decimal value, we can get the appropriate character using String.fromCharCode() and append to newStr
    newStr += String.fromCharCode(parseInt(binaryArray[i], 2));
  }
  return newStr;
}
