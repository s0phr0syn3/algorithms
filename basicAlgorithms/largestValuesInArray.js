function largestOfFour(arr) {
  var largestVals = [];
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      if (largestVals[i] === undefined) {
        largestVals[i] = arr[i][j];
      } else {
        largestVals[i] = (arr[i][j] > largestVals[i] ? arr[i][j] : largestVals[i]);
      }
    }
  }
  return largestVals;
}
