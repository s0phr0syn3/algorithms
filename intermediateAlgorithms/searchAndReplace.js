function myReplace(str, before, after) {
  var strArray = str.split(" ");
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === before) {
      // Capitalized
      if (strArray[i][0].toUpperCase() === strArray[i][0]) {
        strArray.splice(i, 1, after.replace(after[0], after[0].toUpperCase()));
      } else {
        strArray.splice(i, 1, after);      
      }
    } 
  }
  
  return strArray.join(" ");
}
