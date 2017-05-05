function titleCase(str) {
  var strArray = str.split(" ");
  var titleCaseArray = strArray.map(function (val) {
    var newArray = [];
    for (var i = 0; i < val.length; i++) {
      if (i === 0) {
        newArray[i] = val[i].toUpperCase();
      } else {
        newArray[i] = val[i].toLowerCase();
      }
    }
    return newArray.join("");
  });
  return titleCaseArray.join(" ");
}
