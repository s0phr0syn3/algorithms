function truthCheck(collection, pre) {
  // Loop through collection
  for (var i = 0; i < collection.length; i++) {
    // If collection[i] doesn't have property pre or it does but the value is empty/null, return false
    if (!collection[i][pre]) {
      return false;
    }
  }
  // If all loop items pass the test, return true
  return true;
}
