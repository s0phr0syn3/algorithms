function smallestCommons(arr) {
  // sort arguments to keep track of lower and upper boundaries
  var sortedArr = arr.sort();
  var initialSmallestCommonMultiple = 0;
  var small = sortedArr[0];
  var large = sortedArr[1];
  var allDivisible = false;
  
  // Get initial smallest common multiple
  // Increment both small and large by their initial values until they equal, which means we found our lowest common multiple
  while (large !== small) {
    // Increment the lesser value each time until they match
    if (large > small) {
      small += sortedArr[0];
    } else {
      large += sortedArr[1];
    }
  }
  // Set initialSmallestCommonMultiple to value of large (or small, doesn't matter since they match)
  initialSmallestCommonMultiple = large;
  
  // Set our return variable equal to the initial smallest common multiple
  var smallestCommonMultiple = initialSmallestCommonMultiple;
  
  
  // Need to loop until we find a common multiple which is divisible by all integers (inclusive) between sortedArr[0] and sortedArr[1]
  while (!allDivisible) {
    // Loop from sortedArr[0] to sortedArr[1] and check if smallestCommonMultiple is evenly divisible by i
    for (var i = sortedArr[0]; i <= sortedArr[1]; i++) {
      // If smallestCommonMultiple is not evenly divisible by i, we will increment smallestCommonMultiple by initialSmallestCommonMultiple and continue to do so until we match all values of i
      if (smallestCommonMultiple % i !== 0) {
        smallestCommonMultiple += initialSmallestCommonMultiple;
        // Reset i to its initial value so the for loop starts over
        i = sortedArr[0];
      }
    }
    // If the for loop exits, it means everything matches, so we can exit our while loop too
    allDivisible = true;
  }
  
  return smallestCommonMultiple;
}
