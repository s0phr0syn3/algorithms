function diffArray(arr1, arr2) {
  var newArr = [];
  
  // filter arr2 from arr1
  var filteredArr1 = arr1.filter(function(val) {
    // return values in arr1 which do not exist in arr2
    return arr2.indexOf(val) === -1;
  });
  // filter arr1 from arr2
  var filteredArr2 = arr2.filter(function(val) {
    // return values in arr2 which do not exist in arr1
    return arr1.indexOf(val) === -1;
  });
  // concat both arrays into newArr and return value
  return newArr.concat(filteredArr1.slice(), filteredArr2.slice());
}
