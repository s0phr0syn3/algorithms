function mutation(arr) {
  var searchString = arr[0].toLowerCase();
  var checkString = arr[1].toLowerCase();
  for (var i = 0; i < checkString.length; i++) {
    if (searchString.indexOf(checkString[i]) === -1) {
      return false;
    }
  }
  return true;
}
