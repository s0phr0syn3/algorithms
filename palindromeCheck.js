function palindrome(str) {
  var strippedStr = str.replace(/[^A-Za-z0-9]/g, "").replace(/\s/g, "").toLowerCase();
  var i = 0;
  while (i < strippedStr.length / 2) {
    if (strippedStr[i] !== strippedStr[(strippedStr.length - 1) - i]) {
      return false;
    }
    i++;
  }
  return true;
}
