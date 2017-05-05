function destroyer(arr) {
  // Extract array to filter first, always the first argument
  var valuesArray = [];
  // filterArray contains the rest of the arguments we want to remove
  var filterArray = [];
  
  // Basic sanity check to make sure the first argument is an object
  if (typeof arguments[0] === 'object') {
    // Populate valuesArray with the first object argument
    valuesArray = [].slice.call(arguments[0]);
  } else {
    return "First argument must be an array!";
  }
  
  // Loop through remaining arguments to populate filterArray
  for (var i = 1; i < arguments.length; i++) {
    filterArray.push(arguments[i]);
  }
  
  // Filter out values from filterArray
  return valuesArray.filter(function(val) {
    // If value in valuesArray is not found in filterArray, return true (i.e., keep the value)
    return filterArray.indexOf(val) == -1;
  });
}
