function whatIsInAName(collection, source) {
  var arr = [];
  var matches;
  for (var i = 0; i < collection.length; i++) {
    matches = true;
    for (var prop in source) {
      console.log(prop);
      console.log(collection[i].hasOwnProperty(prop));
      console.log(collection[i][prop] === source[prop]);
      console.log('-----');
      if (!collection[i].hasOwnProperty(prop) || collection[i][prop] !== source[prop]) {
        matches = false;
      } 
    }
    if (matches) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
