function chunkArrayInGroups(arr, size) {
  var chunkedArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.slice(i * size, (i * size) + size).length !== 0) {
      chunkedArray.push(arr.slice(i * size, (i * size) + size));
    }
  }
  return chunkedArray;
}
