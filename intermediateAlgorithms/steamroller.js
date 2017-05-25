function steamrollArray(arr) {
  var flattened = arr.reduce(
    function(a, b) {
      if (Array.isArray(b)) {
        return a.concat(steamrollArray(b));
      }
      return a.concat(b);
    }, []
  );
  return flattened;
}
