function getIndexToIns(arr, num) {
  // Sort array
  var sortedArray = arr.sort(function(a,b) {
    // function determines to sort by numeric value
    return a - b;
  });
  
  // If num is larger than the biggest value in sortedArray, we know to add it at the end
  if (num > sortedArray[sortedArray.length - 1]) {
    return sortedArray.length;
  // Otherwise, iterate over the array to find the right place to insert
  } else {
    for (var i = 0; i < sortedArray.length; i++) {
      if (num <= sortedArray[i]) {
        return i;
      }
    }
  }
}
