function findLongestWord(str) {
  var longestWord = 0;
  var strArray = str.split(" ");
  for (var i = 0; i < strArray.length; i++) {
    longestWord = (strArray[i].length > longestWord ? strArray[i].length : longestWord);
  }
  return longestWord;
}
