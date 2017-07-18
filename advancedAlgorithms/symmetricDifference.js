function sym(args) {
  var flatArray = [];
  var argsArray = [].slice.call(arguments);
  flatArray = argsArray.reduce(function (a, b) { 
    return a.filter(function(val) {
      return b.indexOf(val) === -1;
    }).concat(b.filter(function(val) {
      return a.indexOf(val) === -1;
    })).reduce(function (a, b) {
      return a.indexOf(b) === -1 ? a.concat(b) : a;
    }, []);
  }, flatArray);
  return flatArray.sort();
}
