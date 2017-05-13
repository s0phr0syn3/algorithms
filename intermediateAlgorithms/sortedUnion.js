function uniteUnique(arr) {
  var tempArr = [];
  var args = [].slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    tempArr = args.reduce(function (a, b) {
        return a.concat(b);
    });
  }
  
  var returnArr = tempArr.reduce(function (allVals, val) { 
    if (allVals.indexOf(val) === -1) {
      allVals.push(val);
    }
    return allVals;
  }, []);
  
  return returnArr;
}
