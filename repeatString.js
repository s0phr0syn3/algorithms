function repeatStringNumTimes(str, num) {
  var repeatArray = [];
  if (num <= 0) {
    return "";
  } else {
    for (var i = 0; i < num; i++) {
      repeatArray[i] = str;
    }
    return repeatArray.join("");  
  }
}
